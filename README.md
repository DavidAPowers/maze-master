# maze-master

This app is built using Node and Express. It is designed to assist old school RPG Judges who are creating campaigns. App functionality will eventually be accessible via a rest API.

Current API routes:

* /   

  `Returns randomly generated first-level human PC in JSON format, based on rules given in 1984 Basic D&D.`

Example of JSON for a randomly generated character:
	
```
 	{ char_class: 'Cleric',
        ability_scores: { str: 10, int: 7, wis: 11, dex: 11, con: 9, cha: 5 },
        hp: 4,
        saves:
         { 'POISON or DEATH RAY': 11,
           'MAGIC WAND': 12,
           'TURN TO STONE or PARALYSIS': 14,
           'DRAGON BREATH': 16,
           'SPELLS or MAGIC STAFF': 15 },
        gold: 110 }
```

* /roll   

  `returns a '3d6' dice roll (3 six-sided dice)`

* /roll/:dice

  `returns an integer result of simulated dice roll if ':dice' is valid, otherwise returns 0`

## Dice Roll Format ##

Valid dice roll format is `{number}d{sides}`. 

### Valid Dice Roll Strings ###

*  `2d6` is valid, and represents a roll of two six-sided dice. 
* `1d10` is valid, and represents a roll of one ten-sided dice. 
* `3d20` is valid, and represents a roll of three twenty-sided dice. 

### Invalid Dice Roll Strings ###

*  `d6` is invalid
*  `2d` is invalid
*  `asdf` is invalid

## Testing the app ##
 
The app uses Jest for unit tests and Supertest for Express controller integration tests. After installing dependencies via npm, run `npm test` from the command line

## Running the app locally ##

After installing dependencies via npm, run `npm start` from the command line, and view the app at `localhost:3000`. The following routes are available:

* `localhost:3000/`
* `localhost:3000/roll`
* `localhost:3000/roll/3d6`
* `localhost:3000/roll/{:dice}`
