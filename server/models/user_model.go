package models

import (
	"time"

	"github.com/google/uuid"
)

type Users struct {
	ID        uuid.UUID `db:"id"`
	UserID    string    `json:"userid"`
	Name      string    `json:"name"`
	Password  string    `json:"password"`
	Sex       string    `json:"sex"`
	Age       int       `json:"age"`
	Phone     string    `json:"phone"`
	CreatedAt time.Time `json:"created_at"`
}

type LoginUser struct {
	UserID   string `json:"userid"`
	Password string `json:"password"`
}
