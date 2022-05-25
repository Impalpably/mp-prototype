var storyContent = ﻿{"inkVersion":19,"root":[["^This is a project for Falmouth University, I am an Indie Game Development student, and you can contact me at SM252659@falmouth.ac.uk. I am researching how game design can play its part in eco-action and climate change action. By playing this game and completing my survey, you will be supporting my research.","\n","^I am completing a series of prototypes to explore narrative choices for games about climate change.","\n",["ev",{"^->":"0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^That sounds wonderful",{"->":"$r","var":true},null]}],["ev",{"^->":"0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^I would rather let the planet die",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.4.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},2,"-",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"+",{"VAR=":"Empathy","re":true},"/ev",{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"-",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},2,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"-",{"VAR=":"Empathy","re":true},"/ev",{"->":"0.g-0"},{"#f":5}],"g-0":["^Your session is being recorded. I will not hold any personal information, only where you click. If you do not want to take part, you can exit at any time.","\n",{"#":"CLEAR"},"^I would also like to collect some anonymous demographic data for research. To opt-out, select 'Prefer not to answer'.","\n",["ev",{"^->":"0.g-0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^I understand, and I am happy to continue ",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^I will be exiting ",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"0.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"->":"Demographics"},"\n",{"->":"0.g-1"},{"#f":5}],"c-3":["ev",{"^->":"0.g-0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"end","\n",{"->":"0.g-1"},{"#f":5}],"#f":5}],"g-1":["done",{"#f":5}]}],"done",{"Demographics":[[{"#":"CLEAR"},["ev",{"^->":"Demographics.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^She/Her",{"->":"$r","var":true},null]}],["ev",{"^->":"Demographics.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^He/Him",{"->":"$r","var":true},null]}],["ev",{"^->":"Demographics.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^They/Them",{"->":"$r","var":true},null]}],["ev",{"^->":"Demographics.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Prefer not to answer",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Demographics.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"->":"Age"},"\n",{"#f":5}],"c-1":["ev",{"^->":"Demographics.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"Age"},"\n",{"#f":5}],"c-2":["ev",{"^->":"Demographics.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"Age"},"\n",{"#f":5}],"c-3":["ev",{"^->":"Demographics.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"Age"},"\n",{"#f":5}]}],{"#f":1}],"Age":[[["ev",{"^->":"Age.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^16 to 21",{"->":"$r","var":true},null]}],["ev",{"^->":"Age.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^21 to 31",{"->":"$r","var":true},null]}],["ev",{"^->":"Age.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^31 to 41",{"->":"$r","var":true},null]}],["ev",{"^->":"Age.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^41 to 51",{"->":"$r","var":true},null]}],["ev",{"^->":"Age.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^51 to 61",{"->":"$r","var":true},null]}],["ev",{"^->":"Age.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^61 and over",{"->":"$r","var":true},null]}],["ev",{"^->":"Age.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^Prefer not to answer",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Age.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"Attitude"},"\n",{"#f":5}],"c-1":["ev",{"^->":"Age.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"->":"Attitude"},"\n",{"#f":5}],"c-2":["ev",{"^->":"Age.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"Attitude"},"\n",{"#f":5}],"c-3":["ev",{"^->":"Age.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"Attitude"},"\n",{"#f":5}],"c-4":["ev",{"^->":"Age.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"Attitude"},"\n",{"#f":5}],"c-5":["ev",{"^->":"Age.0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"->":"Attitude"},"\n",{"#f":5}],"c-6":["ev",{"^->":"Age.0.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"Attitude"},"\n",{"#f":5}]}],{"#f":1}],"Attitude":[[["ev",{"^->":"Attitude.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^An Eco Activist, I campaign for climate change action",{"->":"$r","var":true},null]}],["ev",{"^->":"Attitude.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^An Eco Educator, I am a knowledgable person on climate change and spread information to educate the world on eco issues",{"->":"$r","var":true},null]}],["ev",{"^->":"Attitude.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^I am concerned about climate change, I recycle and live sustainably, I vote in important",{"->":"$r","var":true},null]}],["ev",{"^->":"Attitude.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^I feel overwhelmed by information and stories, and I don't know what to do or where to start",{"->":"$r","var":true},null]}],["ev",{"^->":"Attitude.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^Thinking about Climate Change is a waste of time. Scientists are exaggerating",{"->":"$r","var":true},null]}],["ev",{"^->":"Attitude.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^Climate Change is a conspiracy to control the population",{"->":"$r","var":true},null]}],["ev",{"^->":"Attitude.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^Prefer not to answer",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Attitude.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"Story"},"\n",{"#f":5}],"c-1":["ev",{"^->":"Attitude.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"->":"Story"},"\n",{"#f":5}],"c-2":["ev",{"^->":"Attitude.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"Story"},"\n",{"#f":5}],"c-3":["ev",{"^->":"Attitude.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"Story"},"\n",{"#f":5}],"c-4":["ev",{"^->":"Attitude.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"Story"},"\n",{"#f":5}],"c-5":["ev",{"^->":"Attitude.0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"->":"Story"},"\n",{"#f":5}],"c-6":["ev",{"^->":"Attitude.0.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"Story"},"\n",{"#f":5}]}],{"#f":1}],"Story":[[{"#":"CLEAR"},"^Great!","\n","^The timer in the top-left indicates the amount of time you have. Please select the choice that feels right to you.","\n",["ev",{"^->":"Story.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Okay, let's do it!",{"->":"$r","var":true},null]}],["ev",{"^->":"Story.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Oh, I'm not sure, but I'll try",{"->":"$r","var":true},null]}],["ev",{"^->":"Story.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^I feel a lot of pressure here",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Story.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"Story.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},1,"+",{"VAR=":"Influence","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"Story.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"-",{"VAR=":"Influence","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^The Start","\n",{"#":"CLEAR"},"^You are one leader, building a civilisation on a floating island.","\n","^To measure the adverse effects of climate change, you created 'The Climate Change Track'. The scale can move from 1 to 12, 1 meaning that adverse effects from climate change are unlikely, and 12 meaning you are close to extinction.","\n","^The Climate Change Track is currently set at 4.","\n","^How you build your city is up to you, but you might want to watch the climate change track!","\n",["ev",{"^->":"Story.0.g-0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Make my first decision",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"Story.0.g-0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],{"->":"Decision1"},"\n",{"#f":5}],"#f":5}]}],{"#f":1}],"Decision1":[["^Our floating city sits close to the equator. Should we adapt to climate change? There may be further consequences if we do not adapt, but our budget is minimal.","\n",["ev",{"^->":"Decision1.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Funds are tight, paint all the houses white and leave it ",{"->":"$r","var":true},null]}],["ev",{"^->":"Decision1.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Install air conditioning in everyones homes",{"->":"$r","var":true},null]}],["ev",{"^->":"Decision1.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Update and rebuild homes to adapt fully to climate change weather through techniques like passive cooling",{"->":"$r","var":true},null]}],["ev",{"^->":"Decision1.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Invest in research to discover new ways to adapt to the weather without adapting buildings and air conditioning energy costs.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Decision1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},0,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},0,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"Decision1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},2,"-",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},0,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},2,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"Decision1.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},5,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"-",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},2,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"Decision1.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},0,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"-",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},5,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Travel","\n",{"#":"CLEAR"},"^Personal travel is a significant contributor to air pollution and C02 emissions; even with investment in electric cars, the planet would be better off if we all use public transport.","\n",["ev",{"^->":"Decision1.0.g-0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^Ban personal travel",{"->":"$r","var":true},null]}],["ev",{"^->":"Decision1.0.g-0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^Allow personal travel for vip's",{"->":"$r","var":true},null]}],["ev",{"^->":"Decision1.0.g-0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^Allow personal travel but campagin for responsible usage",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"Decision1.0.g-0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},5,"-",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},2,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},2,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-1"},{"#f":5}],"c-5":["ev",{"^->":"Decision1.0.g-0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},5,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},5,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"-",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},0,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-1"},{"#f":5}],"c-6":["ev",{"^->":"Decision1.0.g-0.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^Fossil Fuel","\n",{"#":"CLEAR"},"^We are still reliant on fossil fuels. What do you want to do?","\n",["ev",{"^->":"Decision1.0.g-1.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^Stop usage of fossil fuels immediately. This will mean some people and services will be without power while you invest and build renewable energy sources such as wind farms, solar farms and tidal power.",{"->":"$r","var":true},null]}],["ev",{"^->":"Decision1.0.g-1.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":18},{"s":["^Continute to use fossil fuels while you invest and build renewable energy sources.",{"->":"$r","var":true},null]}],{"c-7":["ev",{"^->":"Decision1.0.g-1.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},2,"-",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},2,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-2"},{"#f":5}],"c-8":["ev",{"^->":"Decision1.0.g-1.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},2,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^Meat","\n",{"#":"CLEAR"},"^A new statistic is added: Morale","\n","^Reducing meat consumption will save CO2 emissions, but the decision might not be popular...","\n",["ev",{"^->":"Decision1.0.g-2.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-9","flg":18},{"s":["^Keep all the Meat! ",{"->":"$r","var":true},null]}],["ev",{"^->":"Decision1.0.g-2.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-10","flg":18},{"s":["^Reduce meat consumption ",{"->":"$r","var":true},null]}],["ev",{"^->":"Decision1.0.g-2.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-11","flg":18},{"s":["^Invest in meat alternatives like protein fermentation ",{"->":"$r","var":true},null]}],{"c-9":["ev",{"^->":"Decision1.0.g-2.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"->":"Question5"},"\n","ev",{"VAR?":"Influence"},5,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},1,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},1,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},3,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"#f":5}],"c-10":["ev",{"^->":"Decision1.0.g-2.c-10.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],{"->":"Question5"},"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},1,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},1,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},2,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"#f":5}],"c-11":["ev",{"^->":"Decision1.0.g-2.c-11.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],{"->":"Question6"},"\n","ev",{"VAR?":"Influence"},1,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},1,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},1,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"#f":5}],"#f":5}]}],{"#f":1}],"Question5":[[{"#":"CLEAR"},"^While you favour keeping meat, will you advertise the benefits of reducing meat intake?","\n","^The Climate Change Track is ","ev",{"VAR?":"ClimateChangeTrack"},"out","/ev","\n",["ev",{"^->":"Question5.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Campaign for the benefits of vegetarianism and veganism ",{"->":"$r","var":true},null]}],["ev",{"^->":"Question5.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Actively campaign to convince people that eating meat is bad for the environment ",{"->":"$r","var":true},null]}],["ev",{"^->":"Question5.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Keep all the meat! Eating meat is good! ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Question5.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],{"->":"Question6"},"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},2,"+",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"#f":5}],"c-1":["ev",{"^->":"Question5.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"->":"Question6"},"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},2,"-",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"#f":5}],"c-2":["ev",{"^->":"Question5.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],{"->":"Question6"},"\n","ev",{"VAR?":"Influence"},5,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},0,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},5,"+",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},3,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"#f":5}]}],{"#f":1}],"Question6":[[{"#":"CLEAR"},"^What kinds of meat alternatives will we invest in?","\n",["ev",{"^->":"Question6.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^We won't invest in any meat alternatives, we will only eat meat and no vegetables. ",{"->":"$r","var":true},null]}],["ev",{"^->":"Question6.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Invest in Vertical Farming which uses some CO2 emmissions but is significantly reduced and allows for a variety of fresh and delicious foods",{"->":"$r","var":true},null]}],["ev",{"^->":"Question6.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Invest in Algae Farms and a campaign to show the health benefits. Also invest in Vertical Farming",{"->":"$r","var":true},null]}],["ev",{"^->":"Question6.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Invest in only Alage farms and run a huge campaign about the health benefits. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Question6.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},1,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},2,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},0,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},1,"-",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"Question6.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},2,"+",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"Question6.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},1,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},1,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},1,"+",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"Question6.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},1,"-",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},0,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},1,"-",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},2,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Conspiracy","\n",{"#":"CLEAR"},"^One of your team approaches you with a pamphlet:","\n","^You have an adversary who is spreading fake news and misinformation. They claim you are at the centre of a conspiracy to sterilise and end the human race.","\n","^A new personality trait is added: Paranoia","\n","^How will you address the misinformation that is being spread?","\n",["ev",{"^->":"Question6.0.g-0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^Rise above it",{"->":"$r","var":true},null]}],["ev",{"^->":"Question6.0.g-0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^Spread your own campaign, focusing on the truth, that you are not trying to sterilise the population and you have made positive progress",{"->":"$r","var":true},null]}],["ev",{"^->":"Question6.0.g-0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^Make up dirt on them and start a smear campaign",{"->":"$r","var":true},null]}],["ev",{"^->":"Question6.0.g-0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^Follow them and discover dirt on them and start a smear campaign",{"->":"$r","var":true},null]}],["ev",{"^->":"Question6.0.g-0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":18},{"s":["^Discover who is spreading the fake news and out them",{"->":"$r","var":true},null]}],["ev",{"^->":"Question6.0.g-0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-9","flg":18},{"s":["^Have them assassinated",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"Question6.0.g-0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},1,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},2,"+",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"Paranoia"},2,"+",{"VAR=":"Paranoia","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},0,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-1"},{"#f":5}],"c-5":["ev",{"^->":"Question6.0.g-0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},5,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},1,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},1,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},1,"+",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"Paranoia"},1,"+",{"VAR=":"Paranoia","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},0,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-1"},{"#f":5}],"c-6":["ev",{"^->":"Question6.0.g-0.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},5,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"-",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},2,"-",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"Paranoia"},2,"+",{"VAR=":"Paranoia","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-1"},{"#f":5}],"c-7":["ev",{"^->":"Question6.0.g-0.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},2,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},5,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"-",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},2,"-",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"Paranoia"},2,"+",{"VAR=":"Paranoia","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-1"},{"#f":5}],"c-8":["ev",{"^->":"Question6.0.g-0.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},5,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},2,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},2,"-",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},1,"-",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"Paranoia"},5,"+",{"VAR=":"Paranoia","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-1"},{"#f":5}],"c-9":["ev",{"^->":"Question6.0.g-0.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},5,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},10,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},10,"-",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Morale"},10,"-",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"Paranoia"},10,"+",{"VAR=":"Paranoia","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},1,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^An event","\n",{"#":"CLEAR"},"^An event has occurred:","\n","^Forest fires have decimated a large portion of another city. This city is also responsible for emitting the highest CO2 emissions from all the floating islands.","\n",["ev",{"^->":"Question6.0.g-1.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-10","flg":18},{"s":["^Offer supplies including food, you will have to ration going forward but you will minimise any losses across both cities",{"->":"$r","var":true},null]}],["ev",{"^->":"Question6.0.g-1.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-11","flg":18},{"s":["^Refuse support. They got themeselves into this mess. ",{"->":"$r","var":true},null]}],{"c-10":["ev",{"^->":"Question6.0.g-1.c-10.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},10,"+",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},0,"+",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},10,"+",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Paranoia"},0,"+",{"VAR=":"Paranoia","re":true},"/ev","ev",{"VAR?":"Morale"},10,"+",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},3,"-",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-2"},{"#f":5}],"c-11":["ev",{"^->":"Question6.0.g-1.c-11.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Influence"},10,"-",{"VAR=":"Influence","re":true},"/ev","ev",{"VAR?":"Corruption"},10,"-",{"VAR=":"Corruption","re":true},"/ev","ev",{"VAR?":"Empathy"},10,"-",{"VAR=":"Empathy","re":true},"/ev","ev",{"VAR?":"Paranoia"},10,"+",{"VAR=":"Paranoia","re":true},"/ev","ev",{"VAR?":"Morale"},10,"-",{"VAR=":"Morale","re":true},"/ev","ev",{"VAR?":"ClimateChangeTrack"},3,"+",{"VAR=":"ClimateChangeTrack","re":true},"/ev",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^Your decisions","\n","^Your personality stats are reflected in the decisions you made:","\n","^Influence is ","ev",{"VAR?":"Influence"},"out","/ev","\n","^Corruption is ","ev",{"VAR?":"Corruption"},"out","/ev","\n","^Empathy is ","ev",{"VAR?":"Empathy"},"out","/ev","\n","^Paranoia is ","ev",{"VAR?":"Paranoia"},"out","/ev","\n","^Morale is ","ev",{"VAR?":"Morale"},"out","/ev","\n","^The Climate Change Track is ","ev",{"VAR?":"ClimateChangeTrack"},"out","/ev","\n","^Please complete very short survey here:","\n","^<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://forms.gle/YY8HiRJ1cuHY9nCf6\">Link to Survey</a>","\n","end",{"#f":5}]}],{"#f":1}],"global decl":["ev",10,{"VAR=":"Influence"},10,{"VAR=":"Corruption"},10,{"VAR=":"Empathy"},10,{"VAR=":"Paranoia"},10,{"VAR=":"Morale"},0,{"VAR=":"ClimateChangeTrack"},"/ev","end",null],"#f":1}],"listDefs":{}};