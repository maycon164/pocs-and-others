(defn divide-by [number, divisor] (zero? (mod number divisor)))


(defn fizzbuzz [number] (cond 
(and (divide-by number 3) (divide-by number 5)) "FizzBuzz"
(divide-by number 3) "Fizz"
(divide-by number 5) "Buzz"
:else number))

(fizzbuzz 15)
(fizzbuzz 20)
(fizzbuzz 9)
(str (fizzbuzz 9) (fizzbuzz 20))


(def valores (range 1 16))

(map fizzbuzz valores)

