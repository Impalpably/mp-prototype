VAR Influence = 10
VAR Corruption = 10
VAR Empathy = 10
VAR Paranoia = 10 
VAR Morale = 10
VAR ClimateChangeTrack = 6


This is a project for Falmouth University, I am an Indie Game Development student, and you can contact me at SM252659@falmouth.ac.uk. I am researching how game design can play its part in eco-action and climate change action. By playing this game and completing my survey, you will be supporting my research.

I am completing a series of prototypes to explore narrative choices for games about climate change. 

 * That sounds wonderful
~ Influence += 2
~ Corruption -= 2
~ Empathy += 2

 * I would rather let the planet die
~ Influence -= 2
~ Corruption += 2
~ Empathy -= 2
 
- Your session is being recorded. I will not hold any personal information, only where you click. If you do not want to take part, you can exit at any time. 
# CLEAR

I would also like to collect some anonymous demographic data for research. To opt-out, select 'Prefer not to answer'.

*I understand, and I am happy to continue ->Demographics
*I will be exiting ->END

== Demographics ==
# CLEAR

*She/Her->Age
*He/Him->Age
*They/Them->Age
*Prefer not to answer->Age

== Age ==

*16 to 21->Attitude
*21 to 31->Attitude
*31 to 41->Attitude
*41 to 51->Attitude
*51 to 61->Attitude
*61 and over->Attitude
*Prefer not to answer->Attitude

== Attitude ==


*An Eco Activist, I campaign for climate change action->Story
*An Eco Educator, I am a knowledgable person on climate change and spread information to educate the world on eco issues->Story
*I am concerned about climate change, I recycle and live sustainably, I vote in important->Story
*I feel overwhelmed by information and stories, and I don't know what to do or where to start->Story
*Thinking about Climate Change is a waste of time. Scientists are exaggerating->Story
*Climate Change is a conspiracy to control the population->Story
*Prefer not to answer->Story

== Story == 

# CLEAR

Great!

The timer in the top-left indicates the amount of time you have. Please select the choice that feels right to you. 

*Okay, let's do it!
~ Influence += 2

*Oh, I'm not sure, but I'll try
~ Influence += 1

*I feel a lot of pressure here
~ Influence -= 2

- The Start 
# CLEAR

You are one leader, building a civilisation on a floating island. 

To measure the adverse effects of climate change, you created 'The Climate Change Track'. The scale can move from 1 to 12, 1 meaning that adverse effects from climate change are unlikely, and 12 meaning you are close to extinction. 

The Climate Change Track is currently set at 4. 

How you build your city is up to you, but you might want to watch the climate change track!

*Make my first decision->Decision1

== Decision1 ==

Our floating city sits close to the equator. Should we adapt to climate change? There may be further consequences if we do not adapt, but our budget is minimal. 

*Funds are tight, paint all the houses white and leave it 
~ Influence += 0
~ Corruption += 0
~ Empathy += 0
~ ClimateChangeTrack -= 1

*Install air conditioning in everyones homes
~ Influence += 2
~ Corruption -= 2
~ Empathy += 0
~ ClimateChangeTrack += 2

*Update and rebuild homes to adapt fully to climate change weather through techniques like passive cooling
~ Influence += 5
~ Corruption -= 0
~ Empathy += 2
~ ClimateChangeTrack -= 1

*Invest in research to discover new ways to adapt to the weather without adapting buildings and air conditioning energy costs.
~ Influence += 0
~ Corruption -= 0
~ Empathy += 5
~ ClimateChangeTrack -= 1

- Travel
# CLEAR

Personal travel is a significant contributor to air pollution and C02 emissions; even with investment in electric cars, the planet would be better off if we all use public transport. 

*Ban personal travel
~ Influence -= 5
~ Corruption += 2
~ Empathy += 2
~ ClimateChangeTrack -= 1

*Allow personal travel for vip's
~ Influence += 5
~ Corruption += 5
~ Empathy -= 2
~ ClimateChangeTrack -= 0

*Allow personal travel but campagin for responsible usage
~ Influence += 2
~ Corruption += 0
~ Empathy += 2
~ ClimateChangeTrack -= 0

- Fossil Fuel
# CLEAR

We are still reliant on fossil fuels. What do you want to do? 

*Stop usage of fossil fuels immediately. This will mean some people and services will be without power while you invest and build renewable energy sources such as wind farms, solar farms and tidal power.
~ Influence += 2
~ Corruption -= 2
~ Empathy += 2
~ ClimateChangeTrack -= 1

*Continute to use fossil fuels while you invest and build renewable energy sources.
~ Influence += 2
~ Corruption += 2
~ Empathy += 2
~ ClimateChangeTrack += 2 

- Meat
# CLEAR

A new statistic is added: Morale 

Reducing meat consumption will save CO2 emissions, but the decision might not be popular...

*Keep all the Meat! ->Question5
~ Influence += 5
~ Corruption += 1
~ Empathy += 1
~ ClimateChangeTrack += 3

*Reduce meat consumption ->Question5
~ Influence += 2
~ Corruption += 1
~ Empathy += 1
~ ClimateChangeTrack += 2

*Invest in meat alternatives like protein fermentation ->Question6
~ Influence += 1
~ Corruption += 1
~ Empathy += 1
~ ClimateChangeTrack += 1

 == Question5 ==
 # CLEAR

While you favour keeping meat, will you advertise the benefits of reducing meat intake? 

The Climate Change Track is {ClimateChangeTrack}

*Campaign for the benefits of vegetarianism and veganism ->Question6
~ Influence += 2
~ Corruption += 0
~ Empathy += 2
~ Morale += 2
~ ClimateChangeTrack += 1

*Actively campaign to convince people that eating meat is bad for the environment ->Question6
~ Influence += 2
~ Corruption += 0
~ Empathy += 2
~ Morale -= 2
~ ClimateChangeTrack += 1

*Keep all the meat! Eating meat is good! ->Question6
~ Influence += 5
~ Corruption += 0
~ Empathy += 0
~ Morale += 5
~ ClimateChangeTrack += 3

 == Question6 ==
 # CLEAR

What kinds of meat alternatives will we invest in? 

*We won't invest in any meat alternatives, we will only eat meat and no vegetables. 
~ Influence += 1
~ Corruption += 2
~ Empathy += 0
~ Morale -= 1
~ ClimateChangeTrack += 3

*Invest in Vertical Farming which uses some CO2 emmissions but is significantly reduced and allows for a variety of fresh and delicious foods
~ Influence += 2
~ Corruption += 0
~ Empathy += 2
~ Morale += 2
~ ClimateChangeTrack += 1

*Invest in Algae Farms and a campaign to show the health benefits. Also invest in Vertical Farming
~ Influence += 1
~ Corruption += 0
~ Empathy += 1
~ Morale += 1
~ ClimateChangeTrack -= 0

*Invest in only Alage farms and run a huge campaign about the health benefits. 
~ Influence -= 1
~ Corruption += 0
~ Empathy += 0
~ Morale -= 1
~ ClimateChangeTrack -= 1

- Conspiracy
# CLEAR

One of your team approaches you with a pamphlet:

You have an adversary who is spreading fake news and misinformation. They claim you are at the centre of a conspiracy to sterilise and end the human race. 

A new personality trait is added: Paranoia

How will you address the misinformation that is being spread? 

*Rise above it
~ Influence += 1
~ Corruption += 0
~ Empathy += 2
~ Morale += 2
~ Paranoia += 2
~ ClimateChangeTrack += 0


*Spread your own campaign, focusing on the truth, that you are not trying to sterilise the population and you have made positive progress
~ Influence += 5
~ Corruption += 1
~ Empathy += 1
~ Morale += 1
~ Paranoia += 1
~ ClimateChangeTrack += 0

*Make up dirt on them and start a smear campaign
~ Influence += 2
~ Corruption += 5
~ Empathy -= 2
~ Morale -= 2
~ Paranoia += 2
~ ClimateChangeTrack += 1

*Follow them and discover dirt on them and start a smear campaign
~ Influence += 2
~ Corruption += 5
~ Empathy -= 2
~ Morale -= 2
~ Paranoia += 2
~ ClimateChangeTrack += 1

*Discover who is spreading the fake news and out them

~ Influence += 5
~ Corruption += 2
~ Empathy -= 2
~ Morale -= 1
~ Paranoia += 5
~ ClimateChangeTrack += 1

*Have them assassinated

~ Influence += 5
~ Corruption += 10
~ Empathy -= 10
~ Morale -= 10
~ Paranoia += 10
~ ClimateChangeTrack += 1

- An event
# CLEAR


An event has occurred:
Forest fires have decimated a large portion of another city. This city is also responsible for emitting the highest CO2 emissions from all the floating islands. 

*Offer supplies including food, you will have to ration going forward but you will minimise any losses across both cities
~ Influence += 10
~ Corruption += 0
~ Empathy += 10
~ Paranoia += 0
~ Morale += 10
~ ClimateChangeTrack -=1

*Refuse support. They got themeselves into this mess. 
~ Influence -= 10
~ Corruption -= 10
~ Empathy -= 10
~ Paranoia += 10
~ Morale -= 10
~ ClimateChangeTrack += 3

- Your decisions

Your personality stats are reflected in the decisions you made: 

Influence is {Influence}
Corruption is {Corruption}
Empathy is {Empathy}
Paranoia is {Paranoia}

Morale is {Morale}

The Climate Change Track is {ClimateChangeTrack}

Please complete very short survey here: 

<a target="_blank" rel="noopener noreferrer" href="http:\/\/forms.gle/YY8HiRJ1cuHY9nCf6">Link to Survey</a> 

-> END
