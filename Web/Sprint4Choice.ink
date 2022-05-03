VAR Influence = 10
VAR Corruption = 10
VAR Empathy = 10
VAR Paranoia = 10 
VAR Morale = 10
VAR ClimateChangeTrack = 0


This a project for Falmouth University, I am an Indie Game Development student and you can contact me at SM252659@falmouth.ac.uk. I am researching how game design can play it's part in eco-action and climate change action. By playing this game and completing my survey you will be supporting my research.

I am completing a series of prototypes, to explore narrative choices for games about climate change. 

 * That sounds wonderful
~ Influence += 2
~ Corruption -= 2
~ Empathy += 2

 * I would rather let the planet die
~ Influence -= 2
~ Corruption += 2
~ Empathy -= 2
 
- Your session is being recorded, I will not hold any personal information, only where you click. If you do not want to take part, you can exit at any time. 

*I understand and I am happy to continue ->Story
*I will be exiting ->Exit

== Story == 

Great!

The timer in the top left indicates the amount of time you have. Please select the choice that feels right to you. 

*Okay, lets do it!
*Oh, I'm not sure but I'll try
*I feel a lot of pressure here

- The Start 

Personal travel is a major contributor to air pollution and C02 emmissions, even with investment into electric cars the planet would be a lot better off if we all use public transport. 

*Ban personal travel
~ Influence -= 5
~ Corruption += 2
~ Empathy += 2
~ ClimateChangeTrack -= 2


*Allow pesonal travel for vip's
~ Influence += 5
~ Corruption += 5
~ Empathy -= 2
~ ClimateChangeTrack -= 0

*Allow personal travel but campagin for responsible usage
~ Influence += 2
~ Corruption += 0
~ Empathy += 2
~ ClimateChangeTrack -= 1


- Question 2

We know that we are too late to completely stop climate change effects, our floating city sits close to the equator, should we adapt to climate change? Our budget is limited. 

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
~ ClimateChangeTrack -= 2

*Invest in research to discover new ways to adapt to the weather without the energy costs of adapting buildings and air conditioning. This might take some time.
~ Influence += 0
~ Corruption -= 0
~ Empathy += 5
~ ClimateChangeTrack -= 1

- Question 3

We are still reliant on fossil fuels. What do you want to do? 

*Stop usage of fossil fuels immediately, this will mean some people and services will be without power while you invest and build renewable energy sources such as wind farms, solar farms and tidal power.
~ Influence += 2
~ Corruption -= 2
~ Empathy += 2
~ ClimateChangeTrack -= 2

*Continute to use fossil fuels while you invest and build renewable energy sources.
~ Influence += 2
~ Corruption += 2
~ Empathy += 2
~ ClimateChangeTrack += 1 

- Question 4

By reducing meat consumption, you will save CO2 emmissions slowly but the decision might not be popular...

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

*Invest in meat alternatives ->Question6
~ Influence += 1
~ Corruption += 1
~ Empathy += 1
~ ClimateChangeTrack += 1

 == Question5 ==

While you 

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
~ ClimateChangeTrack -= 1

*Invest in only Alage farms and run a huge campaign about the health benefits. 
~ Influence -= 1
~ Corruption += 0
~ Empathy += 0
~ Morale -= 1
~ ClimateChangeTrack -= 2

- Question 7

One of your team approach you a pamphlet, fake news is spreading about climate change effects and that you are at the centre of a conspiracy to sterilise and end the human race. 

A new personality trait is added: Paranoia

How will you address the missinformation that is being spread? 

*Rise above it
~ Influence += 1
~ Corruption += 0
~ Empathy += 2
~ Morale += 2
~ Paranoia += 2
~ ClimateChangeTrack += 2


*Spread your own campaign
~ Influence += 5
~ Corruption += 1
~ Empathy += 1
~ Morale += 1
~ Paranoia += 1
~ ClimateChangeTrack += 2

*Discover who is spreading the fake news and out them

~ Influence += 5
~ Corruption += 5
~ Empathy -= 5
~ Morale -= 5
~ Paranoia += 5
~ ClimateChangeTrack += 2

*Have them assassinated

~ Influence += 5
~ Corruption -= 10
~ Empathy -= 10
~ Morale -= 10
~ Paranoia += 10
~ ClimateChangeTrack += 3

- Question 8

Event: Forest fires have decimated a large portion of another city, this city is also responsible for emitting the highest level of CO2 emmissions out of all the islands. 

*Offer supplies including food, you will have to ration going forward but you will minimise any losses across both cities
~ Influence += 10
~ Corruption += 0
~ Empathy += 10
~ Paranoia += 0
~ Morale += 10
~ ClimateChangeTrack -=3

*Refuse support. They got themeselves into this mess. 
~ Influence -= 10
~ Corruption -= 10
~ Empathy -= 10
~ Paranoia += 10
~ Morale -= 10
~ ClimateChangeTrack += 3

- Consequences

Your personality stats are reflected in the decisions you made: 

Influence is {Influence}
Corruption is {Corruption}
Empathy is {Empathy}
Paranoia is {Paranoia}
Morale is {Morale}

The Climate Change Track is {ClimateChangeTrack}

->Exit


== Exit ==

- They lived happily ever after.
    -> END
