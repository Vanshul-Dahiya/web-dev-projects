// ! for hour hand
// 12 hr = 360° rotation
//  => 1 hr = 30°
// * for 'h' hr = (30 * h) rotation
//  + some rotation due to seconds hand
// that will be =>  60 min = 30°  => 1 min = (1/2)° rotation
// * for 'm' min = (m/2)° rotation
// * ==>> (30 * h) + (m/2) rotation for hour hand

// ! for minutes hand
// 60 min = 360° rotation
//  => 1 min = 6°
// * for 'm' min = (6 * m) rotation

// ! for seconds hand
// * for 's' sec = (6 * s) rotation

setInterval(() => {
  date = new Date();
  htime = date.getHours();
  mtime = date.getMinutes();
  stime = date.getSeconds();

  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
