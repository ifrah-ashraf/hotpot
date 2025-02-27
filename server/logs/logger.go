package logger

import (
	"fmt"
	"log"
	"os"
	"runtime"
	"time"
)

// Log levels
const (
	INFO  = "INFO"
	ERROR = "ERROR"
)

// Separate log files
var (
	appLogFile *os.File
	appLogger  *log.Logger
)

// init() sets up logging configurations , basically it runs before main func
// to initialize important variable , file etc.
func init() {
	var err error

	// Open application log file
	appLogFile, err = os.OpenFile("application.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("Failed to open application log file: %v", err)
	}

	// Create separate loggers
	appLogger = log.New(appLogFile, "APP: ", log.Ldate|log.Ltime|log.Lshortfile)
}

// logMessage writes logs with caller info to the appropriate logger
func logMessage(logger *log.Logger, level, msg string) {
	// Get caller info
	_, file, line, ok := runtime.Caller(2)
	if !ok {
		file = "???"
		line = 0
	}

	logMsg := time.Now().Format("2006-01-02 15:04:05") + " [" + level + "] " +
		file + ":" + fmt.Sprint(line) + " - " + msg

	logger.Println(logMsg)
}

// Info logs general information to application log
func Info(msg string) {
	logMessage(appLogger, INFO, msg)
}

// Error logs errors to application log
func Error(msg string, err error) {
	finalMsg := msg + " " + err.Error()
	logMessage(appLogger, ERROR, finalMsg)
}
