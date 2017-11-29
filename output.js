// JavaScript resource restrictions do not apply here.
// This is done in order to output digits to the screen.

module.exports = {
  one_hot_to_num: function (ONE_HOT) {
    let a = 0, b = 0, c = 0;
    out = "";
    ONE_HOT[0] && out = "0";
    ONE_HOT[1] && out = "1";
    ONE_HOT[2] && out = "2";
    ONE_HOT[3] && out = "3";
    ONE_HOT[4] && out = "4";
    ONE_HOT[5] && out = "5";
    ONE_HOT[6] && out = "6";
    ONE_HOT[7] && out = "7";
    ONE_HOT[8] && out = "8";
    ONE_HOT[9] && out = "9";
    return out;
  },
  display: function (STR1, STR2, STR3) {
    console.log(STR1 + " " + STR2 + " " + STR3);
  },

};
