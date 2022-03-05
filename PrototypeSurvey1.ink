// This tells Ink there is a function called get_name with no
// parameters
-> Main
EXTERNAL get_name()
=== function get_name() ===
~ return "Anonymous"
== Main ==
Hello {get_name()}!

This a project for Falmouth University, I am an Indie Game Development student there and you can contact me at SM252659@falmouth.ac.uk. By playing this game and completing my survey you will be supporting my research. I am using a tool to record your decisions and play experience. If you are not comfortable with this, please close your tab now! Otherwise, thank you very much for participating! 

Are you happy to continue? 

* Yes -> Chapter1
* No -> END

== Chapter1

Hello {get_name()}! # CLASS: bold

# IMAGE: ../Storm.jpg

You belong to an era named 'The Great Derrangement' (Ghosh 2016), after many, many, many years of denial the world is finally working together to build a sustainable future. 

You are one of four leaders, charged with cutting sky-rocketing CO2 emmissions and re-shaping the world as you know it. 

Every decision you make matters. # CLASS: bold

Do you accept? 

 * Yes -> Chapter2
 * No -> No
 
== Chapter2 ==

What kind of leader do you think you are? # CLASS: bold

Read each profile carefully, and choose who you want to be. # CLASS: bold

Eco-Activist # CLASS: bold
 During 'The Great Derrangement' you demonstrated against fracking, fossil fuels and rallied to vote for change. Your views divided people, you were called an eco-terrorist but you knew you were fighting the right fight for our ecosystem. Now you are in charge, how will you save the world? 
 
   An Activist Leader: 5 Influence Points, 5 Intelligent Points, 5 Likability Points 5 Empathy Points  # IMAGE: ../Activist.jpg

Nihilist # CLASS: bold
 During 'The Great Derrangement' you rejected your individual responsibility, your 'Geo-Political Footprint' and while you recycled and understood that Climate Change is real and happening you simply never really acted to stop it. Now you must act, who will you be? 
 
 A Nihilistic Leader: 5 Influence Points, 10 Intelligent Points, 0 Likability Points  5 Empathy Points # IMAGE: ../Nihilist.jpg

Overwhelmed # CLASS: bold
 During 'The Great Derrangement' you watched the increasing storms, you watched the increasing floods, you watched on your television as the world started to fall. Overwhelmed by the severity of the problem and the lack of resources, the lack of knowing what to do, you did nothing. You are burdened with anxiety and apocalypse fatigue, how will you act in your new role now it's entirely in your power?
 
  An Overwhelmed Leader: 0 Influence Points, 5 Intelligent Points, 5 Likability Points 10 Empathy Points  # IMAGE: ../Fatigue.jpg

Denier # CLASS: bold
 During 'The Great Derrangement' you tweeted. You tweeted any information, no matter where it came from. Even if Climate Change is real, there is nothing we can do about it because it is natural you said. Now you see the natural devastation of climate change, if you don't do anything you'll all die. So what will you do now, let devastation run it's course? 
 
 A Climate Change Deinier: 20 Influence Points, 0 Intelligent Points 0 Likability Points 0 Empathy Points  # IMAGE: ../Denier.jpg

  
  Pick the leader you think you are? # CLASS: bold

 * An Activist Leader  -> Survey 
 * A Nihilistic Leader. -> Survey 
 * An Overwhelmed Leader -> Survey 
 * A Climate Change Denier -> Survey 

 == Survey == 
 
Please complete the survey here: # CLASS: bold

<a target="_blank" rel="noopener noreferrer" href="http:\/\/forms.gle/AMtDAVyWp6SmSc9L8">Link to Survey</a> 

If you haven't explore all the options you can restart below. 

* Restart -> Main
* End -> END
 
 == No ==
 
 Faced with the opportunity to make a change, you hid! Elect someone else! You went home, put on your TV and watched as storms ravaged the world around you.
 
 The leader that was appointed in your stead dies of natural causes one year later 
 The pool of potential leaders is slim. You are asked again, only now things have worsened and The Climate Change Track is set at 6. 
 
 Do you accept? 
 
 * Yes -> Chapter2
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
 
The climate Change Track now sits at 9, there is a strong chance catastrophic disasters will occur. 
 
Your leader stats are now set to 0. 

Do you accept? 

* Yea, I guess -> Chapter2
* No -> END

 The End.
 
 
GHOSH, Amitav. 2016. The Great Derangement: Climate Change and the Unthinkable. Chicago: The University of Chicago Press.

 
    -> END
 