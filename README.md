# Torise2
README.md template generater inspired by [Torisetsu](https://github.com/syossan27/torisetsu).

## Install

```
$ npm install -g torise2
```

## Usage

```
$ torise2 -h
```

```
Usage: torise2 [options]

Options:

  -h, --help               output usage information
  -V, --version            output the version number
  -a, --autor <autor>      This flag specifies the author name to print.
  -l, --license <license>  This flag specifies the choose license to print.
        Choose License:
          none      : None
          apache    : Apache License 2.0
          mit       : MIT License
          al        : Artistic License 2.0
          bsd2      : BSD 2-clause 'Simplified' License
          bsd3      : BSD 3-clause 'New' or 'Revised' License
          cc0       : Creative Commons Zero v1.0 Universal
          epl       : Eclipse Public License 1.0
          agpl      : GNU Affero General Public License v3.0
          gpl2      : GNU General Public License v2.0
          gpl3      : GNU General Public License v3.0
          lgpl2     : GNU Lesser General Public License v2.1
          lgpl3     : GNU Lesser General Public License v3.0
          iscl      : ISC License
          mpl       : Mozilla Public License 2.0
          unlicense : The Unlicense
  -t, --template <path>    Input the name of the file except for the extension.
```

## Option

### Author

```
$ torise2 -a '[Yuji Yamaguchi](https://github.com/YuG1224)'
```

```
...
## Author
[Yuji Yamaguchi](https://github.com/YuG1224)
...
```

### License

```
$ torise2 -l GPL2
```

```
...
## License
[GNU General Public License v2.0](http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)
...
```

## License
[MIT](http://opensource.org/licenses/mit-license.php)

## Author
[YuG1224](https://github.com/YuG1224)
