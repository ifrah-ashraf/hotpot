package main

import (
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/ifrah-ashraf/auth"
	"github.com/ifrah-ashraf/db"
)

func main() {
	fmt.Println("let's go looo")

	db, err := db.ConnectDB()
	if err != nil {
		log.Fatal(err.Error())
	}

	defer db.Close()

	route := gin.Default()

	route.GET("/ping", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "Everything changa si",
			"value":   "laptop ki value",
		})
	})

	route.POST("/signup", auth.SignUpHandler(db))
	route.POST("/login", auth.LoginHandler(db))

	route.Run()
}
