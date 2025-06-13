import sys
import mathß

n = int(input())  # the number of temperatures to analyse
closest: int = 9999
temperature: int = 0
for i in input().split():
    # t: a temperature expressed as an integer ranging from -273 to 5526
    t = int(i)
    difference: int = abs(t - 0)
    if (difference < closest):
        closest = difference
        temperature = t
    elif (difference == closest and t >= 0):
        temperature = t

print(temperature)
