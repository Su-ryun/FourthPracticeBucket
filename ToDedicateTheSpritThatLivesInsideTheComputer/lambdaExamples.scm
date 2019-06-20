;;; “the procedure that returns the reciprocal of its input times its
;;; input plus 2.”
;;; That's what the below is.

(lambda (x) (+ x 4))

;;; To demonstrate something that's more straight forward ...


(define plus4 (lambda (x) (+ x 4)))

;;; The above is exactly same as ...

(define (plus4 x) (+ x 4))

;;; In the realm of scheme, the below is an expression that ...

((lambda (x) (+ x 4)) 2)

;;; declares a lambda procedure and chucks 2 in it.
