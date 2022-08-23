// eslint-disable-next-line no-extend-native, func-names
Object.prototype.log = function () {
  // eslint-disable-next-line no-console
  console.log(this);
};

const x = { a: 1 };
x.log();

if (!String.prototype.trim) {
  // eslint-disable-next-line no-extend-native, func-names
  String.prototype.trim = function () {
    try {
      return this.replace(/^\s+|\s+$/g, '');
    } catch (e) {
      return this;
    }
  };
}

const y = '       lalalalalala        '.trim();
y.log();
