package auth

import (
	"database/sql"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/ifrah-ashraf/models"
)

func SignUpHandler(db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		var user models.Users

		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request , improper JSON value"})
			return
		}

		user.ID = uuid.New()

		if c.Request.Method != http.MethodPost {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Wrong Method"})
		}

		queryStr := `
			INSERT INTO users (id, userid, name, password, sex, age, phone, created_at) 
			VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) 
			RETURNING id, name, created_at `

		dbRes, err := db.Exec(queryStr, user.ID, user.UserID, user.Name, user.Password, user.Sex, user.Age, user.Phone)

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"messaage": "Failed to insert user into the database", "error": err.Error()})
			return
		}

		rowsAffected, _ := dbRes.RowsAffected()

		c.JSON(http.StatusCreated, gin.H{
			"message":      "User registered successfully!",
			"row_affected": rowsAffected,
		})
	}

}

func LoginHandler(db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		var userBody models.LoginUser

		if err := c.BindJSON(&userBody); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request , improper JSON value"})
			return
		}

		if c.Request.Method != http.MethodPost {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Wrong Method"})
		}

		cquery := `SELECT userid , password FROM users WHERE userid = $1 and password = $2`

		err := db.QueryRow(cquery, userBody.UserID, userBody.Password).Scan(&userBody.UserID, &userBody.Password)

		if err == sql.ErrNoRows {
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "No user found",
				"error":   err.Error(),
			})
			return
		} else if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": "Errror while fetching from the database",
				"error":   err.Error(),
			})
			return
		}

		tokenStr, err := GenerateJWTtoken(userBody.UserID)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": "error while generating token",
				"error":   err.Error(),
			})
			return
		}

		c.SetCookie("token", tokenStr, 3600, "/", "localhost", false, true)

		c.JSON(http.StatusOK, gin.H{
			"message": "User found successgully",
			"id":      userBody.UserID,
			"token":   tokenStr,
		})

	}
}
