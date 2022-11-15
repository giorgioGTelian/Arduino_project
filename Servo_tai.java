#include <Servo.h>
Servo servoRight; // Define right servo
Servo servoLeft; // Define left servo
void setup() {
servoRight.attach(9); // Right servo pin 9
servoLeft.attach(10); // Left servo pin 10
}
void loop() {
goForward();
delay(2000);
goReverse();
delay(2000);
goRight();
delay(2000);
goLeft();
delay(2000);
allStop();
delay (2000);
}
// Motion Routines: forward, reverse, turn, stop
void goForward() {
servoRight.write(0);
servoLeft.write(180);
}
