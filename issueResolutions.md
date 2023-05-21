Had an issue with my HeroImage image not showing right after I added a comment (and walked away from my desk and lost all train of thought when I returned)
summary-
I had finished adding the HeroImage to Home.js, tested it in the browser and the image 
and text showed. I added a comment to HeroImage.styles.js. Commited and got out of my seat to take a break.
Came back, completely forgot where I was on the project and my HeroImage image was not showing!
I checked Chrome's React extension>components.
It charted out a tree for each of my components. I saw that the image was loading but just wasn't displaying in the DOM.
I browsed my last commit and found that I had added the comment in my HeroImage.styles.js. I decided to take out the comment and move it out of the code block.
Boom!!
There it was! -The HeroImage image was showing again. 
So happy to see it. Learned my lesson, really need to be careful where I put my comments in the code and then test the code one last time before committing and walking away from my desk Lol.