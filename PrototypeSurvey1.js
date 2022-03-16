var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"Main"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"get_name":["ev","str","^Anonymous","/str","/ev","~ret",{"#f":1}],"Main":[["ev",{"x()":"get_name"},"/ev",{"VAR=":"PlayerName","re":true},"\n","^Hello ","ev",{"VAR?":"PlayerName"},"out","/ev","^!","\n","^This a project for Falmouth University, I am an Indie Game Development student there and you can contact me at SM252659@falmouth.ac.uk. By playing this game and completing my survey you will be supporting my research.","\n","^I am completing a series of prototypes, to explore narrative choices for games about climate change.","\n","^My first prototype, explores character profiles and choices, so the survey may feel very short. This is okay! Getting the character choices right, is the first step and there are no right or wrong answers to the survey or why you may pick one leader and not another.","\n","^I will be releasing more prototypes and surveys, where the narrative will continue and you'll need to make more choices. Which leader you choose will make a difference to the story. Every decision you make will have consequences.","\n","^Your feedback will be used to enhance and iterate on the story of my final game, which will be a card game you can play on your computer.","\n","^I may use software to record your choices and time-taken to decide. Are you happy to continue?","\n",["ev",{"^->":"Main.0.24.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"Main.0.25.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Main.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.24.s"},[{"#n":"$r2"}],{"#":"CLEAR"},{"->":"Chapter1"},"\n",{"#f":5}],"c-1":["ev",{"^->":"Main.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.25.s"},[{"#n":"$r2"}],"end","\n",{"#f":5}]}],{"#f":1}],"Chapter1":[["ev",{"VAR?":"PlayerName"},"out","/ev","^! ",{"#":"IMAGE: ../Storm.jpg"},"\n","^You belong to an era named 'The Great Derangement' (Ghosh 2016), after many, many, many years of denial the world is finally working together to build a sustainable future.","\n","^You are one of four leaders, charged with cutting sky-rocketing CO2 emissions and re-shaping the world as you know it.","\n","^Every leader is different, and will be able to make different policy changes, decisions and build solutions based on their choices and their leader stats in influence, intelligence, likability and empathy. Your leader stats will also change with the decisions you makes, you may start with 5 influence points but these can go up and down based on the consequences of your actions.","\n","^Every decision you make matters. ",{"#":"CLASS: bold"},"\n","ev",{"VAR?":"PlayerName"},"out","/ev","^ what kind of leader do you think you are? ",{"#":"CLASS: bold"},"\n","^Read each profile carefully, and choose who you want to be. ",{"#":"CLASS: bold"},"\n","^Eco-Activist ",{"#":"CLASS: bold"},"\n","^During 'The Great Derangement' you demonstrated against fracking, fossil fuels and rallied to vote for change. Your views divided people, you were called an eco-terrorist but you knew you were fighting for a brighter future for the planet. Now you are in charge, how will you save the world?","\n","^An Activist Leader: 5 Influence Points, 5 Intelligent Points, 5 Likability Points 5 Empathy Points  ",{"#":"IMAGE: ../Activist.jpg"},"\n","^Nihilist ",{"#":"CLASS: bold"},"\n","^During 'The Great Derangement' you rejected your individual responsibility, your 'Geo-Political Footprint' (your opportunities to spread awareness about climate change) and while you recycled and understood that Climate Change is real and happening you simply never really acted to stop it. Now you must act, who will you be?","\n","^A Nihilistic Leader: 5 Influence Points, 10 Intelligent Points, 0 Likability Points  5 Empathy Points ",{"#":"IMAGE: ../Nihilist.jpg"},"\n","^Overwhelmed ",{"#":"CLASS: bold"},"\n","^During 'The Great Derangement' you watched the increasing storms, you watched the increasing floods, you watched on your television as the world started to fall. Overwhelmed by the severity of the problem and the lack of resources, the lack of knowing what to do, you did nothing. You are burdened with anxiety and apocalypse fatigue, how will you act in your new role now it's entirely in your power?","\n","^An Overwhelmed Leader: 0 Influence Points, 5 Intelligent Points, 5 Likability Points 10 Empathy Points  ",{"#":"IMAGE: ../Fatigue.jpg"},"\n","^Denier ",{"#":"CLASS: bold"},"\n","^During 'The Great Derangement' you tweeted. You tweeted any information, no matter where it came from. If Climate Change was real, what can we all do about it. It's a natural phenomenon, you said. Now you see the natural devastation of climate change, if you don't do anything you'll all die. So what will you do now, let devastation run it's course?","\n","^A Climate Change Deinier: 20 Influence Points, 0 Intelligent Points 0 Likability Points 0 Empathy Points  ",{"#":"IMAGE: ../Denier.jpg"},"\n","^The stati","\n","^Pick the leader you think you are? ",{"#":"CLASS: bold"},"\n",["ev",{"^->":"Chapter1.0.63.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^An Activist Leader  ",{"->":"$r","var":true},null]}],["ev",{"^->":"Chapter1.0.64.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^A Nihilistic Leader. ",{"->":"$r","var":true},null]}],["ev",{"^->":"Chapter1.0.65.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^An Overwhelmed Leader ",{"->":"$r","var":true},null]}],["ev",{"^->":"Chapter1.0.66.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^A Climate Change Denier ",{"->":"$r","var":true},null]}],["ev",{"^->":"Chapter1.0.67.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^I am not a leader, I cannot accept! ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Chapter1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.63.s"},[{"#n":"$r2"}],{"->":"Survey"},"\n",{"#f":5}],"c-1":["ev",{"^->":"Chapter1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.64.s"},[{"#n":"$r2"}],{"->":"Survey"},"\n",{"#f":5}],"c-2":["ev",{"^->":"Chapter1.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.65.s"},[{"#n":"$r2"}],{"->":"Survey"},"\n",{"#f":5}],"c-3":["ev",{"^->":"Chapter1.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.66.s"},[{"#n":"$r2"}],{"->":"Survey"},"\n",{"#f":5}],"c-4":["ev",{"^->":"Chapter1.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.67.s"},[{"#n":"$r2"}],{"->":"No"},"\n",{"#f":5}]}],{"#f":1}],"Survey":[["^Thank you for playing ","ev",{"VAR?":"PlayerName"},"out","/ev","\n","^Please complete the survey here: ",{"#":"CLASS: bold"},"\n","^<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://forms.gle/AMtDAVyWp6SmSc9L8\">Link to Survey</a>","\n","^If you haven't explored all the options you can restart below.","\n",["ev",{"^->":"Survey.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Restart ",{"->":"$r","var":true},null]}],["ev",{"^->":"Survey.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^End ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Survey.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],{"->":"Main"},"\n",{"#f":5}],"c-1":["ev",{"^->":"Survey.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"end","\n",{"#f":5}]}],{"#f":1}],"No":[["^Faced with the opportunity to make a change, you hid! Elect someone else! You went home, put on your TV and watched as storms ravaged the world around you.","\n","^The leader that was appointed in your stead dies of natural causes one year later","\n","^The pool of potential leaders is slim. You are asked again, only now things have worsened and The Climate Change Track is set at 6.","\n","^Do you accept?","\n",["ev",{"^->":"No.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"No.0.c-0","flg":18},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"No.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"No.0.c-1","flg":18},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"No.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"No.0.8.s"},[{"#n":"$r2"}],{"->":"Chapter1"},"\n",{"#f":5}],"c-1":["ev",{"^->":"No.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"No.0.9.s"},[{"#n":"$r2"}],{"->":"No2"},"\n","^See the Climate Change Track ",{"->":"ClimateChangeTrack"},"\n",{"#f":5}]}],{"#f":1}],"ClimateChangeTrack":["^1 to 4, A small chance that disasters will occur.","\n","^5 to 9, A mild chance that disasters will occur.","\n","^9 to 10, A strong chance that disasters will occur.","\n","^11 to 12, Extinction level disasters might occur.","\n","^Continue the story ",{"->":"No"},"\n",{"#f":1}],"No2":[["^You spend four years hoping someone else can sort this mess of a world out. Temperatures have risen, air pollution is high, hurricanes and earthquakes are now common and inflation has driven the cost of food high.","\n","^The Climate Change Track now sits at 9, there is a strong chance catastrophic disasters will occur.","\n","^Your leader stats are now set to 0.","\n","^Do you accept?","\n",["ev",{"^->":"No2.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Yea, I guess ",{"->":"$r","var":true},null]}],["ev",{"^->":"No2.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"No2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],{"->":"Chapter1"},"\n",{"#f":5}],"c-1":["ev",{"^->":"No2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"end","\n","^The End.","\n","^GHOSH, Amitav. 2016. The Great Derangement: Climate Change and the Unthinkable. Chicago: The University of Chicago Press.","\n","end",{"#f":5}]}],{"#f":1}],"global decl":["ev","str","^","/str",{"VAR=":"PlayerName"},"/ev","end",null],"#f":1}],"listDefs":{}};