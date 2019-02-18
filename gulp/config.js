export const base = {
  dest: './client/public/www',
  host: 'localhost',
  port: 9000
}

export const paths = {
  root: './',
  src: './src',
  dest: `${base.dest}/`,
  deploy: `${base.dest}/assets/**/*`,
  styles: {
    src: 'src/styles/main.scss',
    watch: 'src/styles/**/*.scss',
    modules: 'src/modules/**/*.scss',
    dest: `${base.dest}/assets/css`,
    lint: 'src/styles/**/*.s+(a|c)ss'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: 'src/scripts/**/*.js',
    modules: 'src/modules/**/*.js',
    dest: `${base.dest}/assets/js`,
  },
  images: {
    src: 'src/images/img/**/*',
    modules: 'src/modules/**/*.+(gif|png|jpe?g|svg)',
    dest: `${base.dest}/assets/img`
  },
  fonts: {
    src: 'src/fonts',
    dest: `${base.dest}/assets/font`
  },
  harp: {
    src: './client/public',
    watch: `./client/public/**/*.+(ejs|jade|md|json)`
  }
}

export const isProd = process.env.NODE_ENV === 'production';
