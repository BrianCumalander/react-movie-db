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

######

My original code was to display a movie vote average in MovieInfo, which gave me 0.00, but it was too big for the circle that I was putting it in. 
I googled, js two to one decimal

Grepper returned some great results. Take this example:
(3.141596).toFixed(2);	// 3.14

My original code which was returning 7.75:
   <div className="score">{movie.vote_average}</div>

//My fix, returns 7.8, which fit inside of my css circle:
   <div className="score">{(movie.vote_average).toFixed(1)}</div>

######

The 'Load More' button didn't work initially. I dove back in to the code, found that 
in my Components>Button>index.js file, I had defined the on click as
 <Wrapper type='button' onclick={callback}>

The code helper displayed: (property) onclick: any
I changed onclick to onClick:
<Wrapper type='button' onClick={callback}>

Now the code helper shows that it is now connected to React:
(property) onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined

Ran npm start, tested in the browser, and now the button loads more results as expected.

######

Wanted to add the 'year released' to the movie info page for each movie.
'.release_date' was avalible, but returned in year-day-month format.
used the .slice tool to drop off the remaining characters.
used: 
{movie.title} ({(movie.release_date).slice(0, -6)});
results:
The Titan (2018)

######

