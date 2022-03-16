// This tells Ink there is a function called get_name with no
// parameters
-> Main
EXTERNAL get_name()
=== function get_name() ===
~ return "Anonymous"
== Main ==
VAR PlayerName = ""
~ PlayerName = get_name()
Hello {PlayerName}!

This a project for Falmouth University, I am an Indie Game Development student there and you can contact me at SM252659@falmouth.ac.uk. I am researching how game design can play it's part in eco-action and climate change action. By playing this game and completing my survey you will be supporting my research.

I am completing a series of prototypes, to explore narrative choices for games about climate change. 

My first prototype, explores character profiles and choices, so the survey may feel very short. This is okay! Getting the character choices right, is the first step and there are no right or wrong answers to the survey or why you may pick one leader and not another. 

I will be releasing more prototypes and surveys, where the narrative will continue and you'll need to make more choices. Which leader you choose will make a difference to the story. Every decision you make will have consequences. 

Your feedback will be used to enhance and iterate on the story of my final game, which will be a narrative-driven card game. While collecting cards and building up a city, events will appear, these events will explore ideas around climate change, the challenges of finding solutions for action to protect our planet. Your feedback will make a huge difference! 

I may use software to record your choices and time-taken to decide. Are you happy to continue? 

* Yes -> Chapter1 # CLEAR
* No -> END

== Chapter1 ==

{PlayerName}! # IMAGE: ../Storm.jpg

You belong to an era named 'The Great Derangement' (Ghosh 2016), after many, many, many years of denial the world is finally working together to build a sustainable future. 

You are one of four leaders, charged with cutting sky-rocketing CO2 emissions and re-shaping the world as you know it. 

Every leader is different, and will be able to make different policy changes, decisions and build solutions based on their choices and their leader stats in influence, intelligence, likability and empathy. Your leader stats will also change with the decisions you makes, you may start with 5 influence points but these can go up and down based on the consequences of your actions.

Every decision you make matters. # CLASS: bold

{PlayerName} what kind of leader do you think you are? # CLASS: bold

Read each profile carefully, and choose who you want to be. # CLASS: bold

Eco-Activist # CLASS: bold
 During 'The Great Derangement' you demonstrated against fracking, fossil fuels and rallied to vote for change. Your views divided people, you were called an eco-terrorist but you knew you were fighting for a brighter future for the planet. Now you are in charge, how will you save the world? 
 
   An Activist Leader: 5 Influence Points, 5 Intelligent Points, 5 Likability Points 5 Empathy Points  # IMAGE: ../Activist.jpg

Nihilist # CLASS: bold
 During 'The Great Derangement' you rejected your individual responsibility, your 'Geo-Political Footprint' (your opportunities to spread awareness about climate change) and while you recycled and understood that Climate Change is real and happening you simply never really acted to stop it. Now you must act, who will you be? 
 
 A Nihilistic Leader: 5 Influence Points, 10 Intelligent Points, 0 Likability Points  5 Empathy Points # IMAGE: ../Nihilist.jpg

Overwhelmed # CLASS: bold
 During 'The Great Derangement' you watched the increasing storms, you watched the increasing floods, you watched on your television as the world started to fall. Overwhelmed by the severity of the problem and the lack of resources, the lack of knowing what to do, you did nothing. You are burdened with anxiety and apocalypse fatigue, how will you act in your new role now it's entirely in your power?
 
  An Overwhelmed Leader: 0 Influence Points, 5 Intelligent Points, 5 Likability Points 10 Empathy Points  # IMAGE: ../Fatigue.jpg

Denier # CLASS: bold
 During 'The Great Derangement' you tweeted. You tweeted any information, no matter where it came from. If Climate Change was real, what can we all do about it. It's a natural phenomenon, you said. Now you see the natural devastation of climate change, if you don't do anything you'll all die. So what will you do now, let devastation run it's course? 
 
 A Climate Change Deinier: 20 Influence Points, 0 Intelligent Points 0 Likability Points 0 Empathy Points  # IMAGE: ../Denier.jpg
 
Not a leader # CLASS: bold
Someone else should take this great responsibility. 

Not a Leader:  0 Influence Points, 0 Intelligent Points 0 Likability Points 0 Empathy Points # IMAGE: ../No.jpg
  
  Pick the leader you think you are? # CLASS: bold

 * An Activist Leader  -> Survey 
 * A Nihilistic Leader. -> Survey 
 * An Overwhelmed Leader -> Survey 
 * A Climate Change Denier -> Survey 
 * I am not a leader, I cannot accept! -> No


 == No ==
 
 Faced with the opportunity to make a change, you hid! Elect someone else! You went home, put on your TV and watched as storms ravaged the world around you.
 
 The leader that was appointed in your stead dies of natural causes one year later 
 The pool of potential leaders is slim. You are asked again, only now things have worsened and The Climate Change Track is set at 6. 
 
 Do you accept? 
 
 * Yes -> Chapter1
 * No -> No2
 
 See the Climate Change Track -> ClimateChangeTrack
 
 == ClimateChangeTrack ==
 
 1 to 4, A small chance that disasters will occur. 
 5 to 9, A mild chance that disasters will occur.
 9 to 10, A strong chance that disasters will occur. 
 11 to 12, Extinction level disasters might occur. 
 
 Continue the story -> No
 
 == No2 ==
 
 You spend four years hoping someone else can sort this mess of a world out. Temperatures have risen, air pollution is high, hurricanes and earthquakes are now common and inflation has driven the cost of food high.
 
The Climate Change Track now sits at 9, there is a strong chance catastrophic disasters will occur. 
 
Your leader stats are now set to 0. 

Do you accept? 

* Yea, I guess -> Chapter1
* No -> Survey

  == Survey == 

Thank you for playing {PlayerName} 

Please complete the survey here: # CLASS: bold

<a target="_blank" rel="noopener noreferrer" href="http:\/\/forms.gle/AMtDAVyWp6SmSc9L8">Link to Survey</a> 

If you haven't explored all the options, and you want to (you don't have to) you can restart below. 

'The Great Derrangement' is a reference to Amitav Ghosh book by the same title (The Great Derangement: Climate Change and the Unthinkable). 

The full quote: 

“Quite possibly, then, this era, which so congratulates itself on its self awareness, will come to be known as the time of The Great Derrangement” (Ghosh 2017:11).

 References

 GHOSH, Amitav. 2016. The Great Derangement: Climate Change and the Unthinkable. Chicago: The University of Chicago Press.

* Restart -> Main
* End -> END
 
 
    -> END
    
    

 