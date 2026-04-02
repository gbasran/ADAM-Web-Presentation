# Adam: A Method for Stochastic Optimization

**[View Live Presentation](https://gbasran.github.io/ADAM-Web-Presentation/)**

Web presentation for MATH 3850 (Numerical Optimization) at the University of Lethbridge, reproducing key results from Kingma & Ba (ICLR 2015).

## What We Did

- Implemented Adam and 4 comparison optimizers (SGD, SGD+Momentum, AdaGrad, RMSProp) from scratch in NumPy
- Trained logistic regression and a neural network on MNIST handwritten digits
- Validated our Adam against PyTorch (max diff: 6.34e-7 over 4,690 iterations)
- Tested on the Rosenbrock function to connect back to course material
- Analyzed hyperparameter sensitivity across learning rate, momentum decay, and scale decay

## Presentation

13 slides covering:

1. The problem with gradient descent (condition number, noisy gradients)
2. The two ingredients (momentum + adaptive learning rates)
3. Algorithm 1 from the paper, color-coded and annotated
4. Data flow diagram
5. Our NumPy implementation mapped line-by-line to the paper
6. Experiment 1: MNIST logistic regression (5 optimizers, 40 epochs)
7. Experiment 2: PyTorch validation (correctness proof)
8. Experiment 3: Rosenbrock function (course connection)
9. Experiment 4: Hyperparameter sensitivity
10. Experiment 5: Neural network (101,770 parameters, where Adam shines)
11. Course connection: GD vs BFGS vs Adam
12. Summary and key findings

Navigate with arrow keys. Built with a warm academic design system (Source Serif 4, Inter, JetBrains Mono, KaTeX for math).

## Team

Gurman Basran & Qusai Quresh

## References

- Kingma & Ba (2015), "Adam: A Method for Stochastic Optimization," ICLR
- Ruder (2016), "An overview of gradient descent optimization algorithms"
- Nocedal & Wright, *Numerical Optimization*, 2nd ed.
