var now = new Date()
var startedJob = new Date("March 04, 2019 9:00:00")
var startedCoding = new Date("November 05, 2018 9:00:00");
var codingTime = Math.abs(now.getTime() - startedCoding.getTime());
var codingDays = Math.ceil(codingTime / (1000 * 60 * 60 * 24));
var jobTime = Math.abs(now.getTime() - startedJob.getTime());
var jobDays = Math.ceil(jobTime / (1000 * 60 * 60 * 24));
console.log(codingDays);
console.log(jobDays);

var bio = ['2 degrees.','5 cities.','10,622 miles from home.',codingDays + ' days coding.',jobDays + ' days as a software developer.','Infinite curiosity.'];


new TypeIt('#typewriter', {
lifeLike: false,
cursorChar: '|',
strings: bio,
speed: 55,
breakLines: false,
waitUntilVisible: true,
deleteSpeed: 80,
nextStringDelay: 1000,
})
.exec(async () => {
await new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve();
  }, 2000)
});
})
.delete(bio[4].length)
.type('\nHi, I\'m Ellen. It\'s great to have you here 👋')
.go();