var path = require('path');
var fs = require('fs');
var async = require('async');
//    console.log(uriRe + '\n');
var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        if(err) {
          return done(err);
        }
      var i = 0;
      (function next() {
        var file = list[i++];
        if(!file) return done(null, results);
        file = path.resolve(dir, file);
        fs.stat(file, function(error, stats) {
            if(stats && stats.isDirectory()) {
              walk(file, function(err, res) {
                results = results.concat(res);
                next();
              });
            } else {
              results.push(file);
              next();
            }
        });
      })();
      });
    };
//              fs.readFile(path.join(process.cwd(), 'build\\' + file), function(err, data) {
//                if(err) {
//                  throw err;
//                }
//                console.log("Checking for matches...");
//  //              var matches = data.toString().match(uriRe);
//  //              console.log(matches.length);
//                var replacement = '';
//                var replaced = data;
//  //              console.log('MATCH: ' + match);
//                while((match = uriRe.exec(data.toString())) !== null) {
//                  console.log(match[0]);
//                  replaced = replaced.toString().replace(match[0], 'href="http://justathoughtor2.com/dwarvensmithy' + match[0].split('"')[1] + '"');
//                }
//  //              replacement = 'href="http://justathoughtor2.com/dwarvensmithy' + match.slice(-(match.length - 6));
//  //              replaced = data.toString().replace(match, replacement);
//  //              console.log(replaced);
//  //             var replaced = data.toString().replace(uriRe, replacement);
//                console.log(replaced);
//                fs.writeFile(path.join(process.cwd(), 'build\\' + file), replaced, 'utf8', function(err) {
//                  if(err) {
//                    throw err;
//                  }
//                });
//              });
//            }
//            else if(stats.isDirectory()) {
//
//            }
//      })();
////        console.log(files + '\n');
//          });
//};

walk(path.join(process.cwd(), 'build'), function(err, results) {
  if(err) throw err;
  async.each(results, function(result, callback) {
    if(!result.includes('.git')) {
      console.log(result);
    fs.readFile(result, function(err, data) {
                if(err) {
                  throw err;
                }
              var uriRe = new RegExp(/[(href)(src)]="\/.*"/g);
                console.log("Checking for matches...");
  //              var matches = data.toString().match(uriRe);
  //              console.log(matches.length);
                var replacement = '';
                var replaced = data;
      console.log(replaced);
  //              console.log('MATCH: ' + match);
                while((match = uriRe.exec(data.toString())) !== null) {
                  console.log(match[0]);
                  replaced = replaced.toString().replace(match[0], 'href="http://justathoughtor2.com/dwarvensmithy' + match[0].split('"')[1] + '"');
                  console.log(replaced);
                }
  //              replacement = 'href="http://justathoughtor2.com/dwarvensmithy' + match.slice(-(match.length - 6));
  //              replaced = data.toString().replace(match, replacement);
  //              console.log(replaced);
  //             var replaced = data.toString().replace(uriRe, replacement);
                console.log(replaced);
                fs.writeFile(result, replaced, 'utf8', function(err) {
                  if(err) {
                    throw err;
                  }
                  callback();
                });
              });
    }

  }, function(err) {
    if(err) {
      console.log(err);
    }
  });
});
