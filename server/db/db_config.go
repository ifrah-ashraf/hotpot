package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func ConnectDB() (*sql.DB, error) {
	err := godotenv.Load()

	if err != nil {
		return nil, err
	}

	connStr := os.Getenv("DB_URI")

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}
	if err = db.Ping(); err != nil {
		log.Printf("Database connection error : %v", err)
		return nil, err
	}
	fmt.Println("Database connected successfully")

	/* err = CreateTable(db)
	if err != nil {
		fmt.Println("Error while creating table", err)
	} */

	return db, nil
}

func CreateTable(db *sql.DB) error {
	query := `
	CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

	CREATE TABLE IF NOT EXISTS users (
		id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
		userid VARCHAR(50) UNIQUE NOT NULL,
		name VARCHAR(100) NOT NULL,
		password TEXT NOT NULL,
		sex VARCHAR(10) NOT NULL,
		age INTEGER NOT NULL,
		phone VARCHAR(20) UNIQUE NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);
`
	_, err := db.Exec(query)
	if err != nil {
		return err
	}
	fmt.Println("User table created successfully")
	return nil

}
