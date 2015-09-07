var dest = './example/dist';
var src = './example/src';
var libDest = './lib';
var libSrc = './src';

module.exports = {
  clean: {
    dest: [dest, libDest]
  }
  ,browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  }
  ,html: {
    src: src + '/*.html'
    ,dest: dest
  }
  ,eslint: {
    src: src + '/js/**/*.js*'
  }
  ,browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/app.jsx',
      dest: dest,
      outputName: 'bundle.js',
      transform: ['babelify']
    }]
  }
  ,jsonServer: {
    src: src + "/db/db.json",
    dest: dest + "/db",
    port: "3002"
  }
  ,sass: {
    src: src + '/sass/**/*.{sass,scss}'
    ,dest: dest + '/css'
    ,settings: {
      indentedSyntax: false // Enable .sass syntax!
      ,imagePath: 'images' // Used by the image-url helper
    }
  }
  ,animateCss: {
    src: ['./node_modules/animate.css/animate.min.css']
    ,dest: src + '/sass/vendor/animate-css'
  }
  ,toastr: {
    src: ['./node_modules/toastr/build/toastr.min.css']
    ,dest: src + '/sass/vendor/toastr'
  }
  ,build: {
    dest: libDest
    ,src: libSrc
  }
};
