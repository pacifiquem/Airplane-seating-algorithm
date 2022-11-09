# airplane-seatng-algorithm

app that helps seat audiences in a flight based on the following input and rules.

Rules for seating:
- Always seat passengers starting from the front row to back, starting from the left to the right
- Fill aisle seats first followed by window seats followed by center seats (any order in center seats)

Input to the program will be
- A 2D array that represents the rows and columns ex: [[3,4], [4,5], [2,3]]
- Number of passengers waiting in queue.