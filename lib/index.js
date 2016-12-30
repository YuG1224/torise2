#!/usr/bin/env node

const fs = require('fs');
const license = require('./license');
const opts = require('commander');
const path = require('path');
const version = require(`${__dirname}/../package.json`).version;

// コマンドライン設定
opts
  // versionの表示
  .version(version)
  // autorの指定
  .option(
    '-a, --autor <autor>',
    'This flag specifies the author name to print.'
  )
  // licenseの指定
  .option(
    '-l, --license <license>',
    `This flag specifies the choose license to print.
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
        unlicense : The Unlicense`,
    /^(none|apache|mit|al|bsd2|bsd3|cc0|epl|agpl|gpl2|gpl3|lgpl2|lgpl3|iscl|mpl|unlicense)$/i,
    'mit'
  )
  // README.mdのテンプレート指定
  .option(
    '-t, --template <path>',
    'Input the name of the file except for the extension.'
  )
  .parse(process.argv);

// テンプレートの設定
let template;
if (opts.template) {
  const pathObject = path.parse(opts.template)
  if (!pathObject.root) {
    pathObject.root = '/';
    pathObject.dir = `${process.env.PWD}/${pathObject.dir}`
  }
  template = fs.readFileSync(path.format(pathObject), 'utf8');
} else {
  template = require('./template')
}

// auhtor文字列挿入
template = template.replace(/torise2.author/g, opts.autor || '');

// license文字列挿入
template = template.replace(/torise2.license/g, license[opts.license.toLowerCase()] || '');

// README.md出力
fs.writeFileSync('README.md', template, 'utf8');
