module.exports = components = {
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
  },
  eight_bit: {
    adder: function (A, B, sub) {
      let out = [0, 0, 0, 0, 0, 0, 0, 0];
      let carry = 0;
      let cur;

      cur = components.single_bit.full_adder(
        A[7],
        ~components.single_bit.xor(B[7], ~sub),
        ~~sub
      );
      out[7] = cur.out;

      cur = components.single_bit.full_adder(
        A[6],
        ~components.single_bit.xor(B[6], ~sub),
        cur.carry
      );
      out[6] = cur.out;

      cur = components.single_bit.full_adder(
        A[5],
        ~components.single_bit.xor(B[5], ~sub),
        cur.carry
      );
      out[5] = cur.out;
      
      cur = components.single_bit.full_adder(
        A[4],
        ~components.single_bit.xor(B[4], ~sub),
        cur.carry
      );
      out[4] = cur.out;

      cur = components.single_bit.full_adder(
        A[3],
        ~components.single_bit.xor(B[3], ~sub),
        cur.carry
      );
      out[3] = cur.out;
        
      cur = components.single_bit.full_adder(
        A[2],
        ~components.single_bit.xor(B[2], ~sub),
        cur.carry
      );
      out[2] = cur.out;

      cur = components.single_bit.full_adder(
        A[1],
        ~components.single_bit.xor(B[1], ~sub),
        cur.carry
      );
      out[1] = cur.out;

      cur = components.single_bit.full_adder(
        A[0],
        ~components.single_bit.xor(B[0], ~sub),
        cur.carry
      );
      out[0] = cur.out;

      return {
        out: out,
        overflow: ~components.single_bit.xor(cur.carry, ~sub),
      };
    },
    subtractor: function (A, B) {
      return this.adder(A, B, 1);
    },
    and: function (A, B) {
      return [
        components.single_bit.and(A[0], B[0]),
        components.single_bit.and(A[1], B[1]),
        components.single_bit.and(A[2], B[2]),
        components.single_bit.and(A[3], B[3]),
        components.single_bit.and(A[4], B[4]),
        components.single_bit.and(A[5], B[5]),
        components.single_bit.and(A[6], B[6]),
        components.single_bit.and(A[7], B[7])
      ];
    },
    or: function (A, B) {
      return [
        components.single_bit.or(A[0], B[0]),
        components.single_bit.or(A[1], B[1]),
        components.single_bit.or(A[2], B[2]),
        components.single_bit.or(A[3], B[3]),
        components.single_bit.or(A[4], B[4]),
        components.single_bit.or(A[5], B[5]),
        components.single_bit.or(A[6], B[6]),
        components.single_bit.or(A[7], B[7])
      ];
    },
    shift_right: function (A) {
      return [
        A[0],
        A[0],
        A[1],
        A[2],
        A[3],
        A[4],
        A[5],
        A[6]
      ];
    },
    shift_left: function (A) {
      return [
        A[1],
        A[2],
        A[3],
        A[4],
        A[5],
        A[6],
        A[7],
        0
      ];
    },
    binary_to_decimal: function (A) {

    }
  }
};
