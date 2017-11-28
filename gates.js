module.exports = {
  single_bit: {
    and: function (A, B) {
      return (
        ~(~A | ~B)
      );
    },
    xor: function (A, B) {
      return (
        this.and(A, ~B)
        |
        this.and(~A, B)
      );
    },
    half_adder: function (A, B) {
      return {
        carry: this.and(A, B),
        out: this.xor(A, B)
      };
    },
    full_adder: function (A, B, Cin) {
      return {
        carry: (
          this.and(A, B)
          |
          this.and(Cin, (A | B))
        ),
        out: this.xor(
          A,
          this.xor(B, Cin)
        )
      };
    }
  }
};
