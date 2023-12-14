class Day {
  constructor() {
    this.Mood = new Coffee(); // Starting the day with a cup of Mood
    this.Productivity = 0; // Initializing productivity level
  }

  beginDay() {
    if (this.Mood.Empty) {
      this.Mood.Refill(); // Refueling the day with a fresh cup of Mood
      console.log("New day, new opportunities! Refilling Mood...");
    } else {
      this.Mood.Drink(); // Taking a sip to kickstart the day
      console.log("Sipping on Mood, ready to conquer the day!");
      this.Productivity += 10; // Boosting productivity with each sip
    }
  }

  work() {
    // Simulating a productive work session
    console.log("Working hard and staying focused!");
    this.Productivity += 20;
    this.Mood.Drink(); // Taking occasional sips to maintain the positive vibes
  }

  endDay() {
    console.log("Wrapping up the day with a sense of accomplishment.");
    console.log(`Total productivity: ${this.Productivity}%`);
    console.log("Cheers to a day well-spent!");
  }
}

// Let's start the day!
const myDay = new Day();
myDay.beginDay();

// Simulate a productive work session
myDay.work();
myDay.work();
myDay.work();

// End the day with a sense of accomplishment
myDay.endDay();
