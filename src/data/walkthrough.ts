import type { WalkthroughChapter } from '../types'

// Generated from the author's own guide, "Dark Souls II: Scholar of the First Sin 100% Achievement Guide"
// by ponkberry (https://steamcommunity.com/sharedfiles/filedetails/?id=419088382).
// Step text is the guide's own wording.
export const walkthrough: WalkthroughChapter[] = [
  {
    id: 'ch01-tutorials',
    title: 'Tutorials',
    summary: 'Introduction',
    steps: [
      {
        id: 'ch01-s01',
        text: 'Self Recollection - Reclaim flesh and set out as an Undead',
        achievementIds: ['self-recollection', 'this-is-dark-souls'],
      },
      {
        id: 'ch01-s02',
        text: 'This achievement is awarded as you finish creating your character during the tutorials. May be your first achievement provided you somehow didn\'t die before this.',
      },
    ],
  },
  {
    id: 'ch02-majula',
    title: 'Majula',
    summary: 'After you exit the tutorials, you\'ll find yourself in Majula.',
    steps: [
      {
        id: 'ch02-s01',
        text: 'Covenant of the Meek can be obtained through Crestfallen Saulden.',
        achievementIds: ['covenant-of-the-meek'],
      },
      {
        id: 'ch02-s02',
        text: 'Covenant of the Fittest can be obtained through the Victor\'s Stone.',
        achievementIds: ['covenant-of-the-fittest'],
      },
      {
        id: 'ch02-s03',
        text: 'An Estus Flask Shard can be obtained by attacking the rock at the well.',
      },
      {
        id: 'ch02-s04',
        text: 'The \'Welcome\' gesture is given by Crestfallen Saulden. (Gesture Maestro)',
        subAchievementIds: [{ achievementId: 'gesture-maestro', subItemId: 'welcome' }],
      },
    ],
  },
  {
    id: 'ch03-forest-of-fallen-giants',
    title: 'Forest of Fallen Giants',
    summary: 'From the path you took to get to Majula, there should be a tunnel pathing under you which leads to your next area.',
    steps: [
      {
        id: 'ch03-s01',
        text: 'Merchant Hag Melentia is located here. Exhaust her dialogue to relocate her to Majula. (Gathering of Exiles). She also sells the first of many required Fragrant Branch of Yore (12,000 souls).',
        subAchievementIds: [{ achievementId: 'gathering-of-exiles', subItemId: 'melentia' }],
      },
      {
        id: 'ch03-s02',
        text: 'Small White Sign Soapstone in room above Cardinal Tower bonfire',
      },
      {
        id: 'ch03-s03',
        text: 'Estus Flask Shard on a body where you fight the OPTIONAL Pursuer fight (just outside the exploded wall up a ladder) near the Cardinal Tower bonfire',
      },
      {
        id: 'ch03-s04',
        text: 'Great Soul Arrow sorcery in the ballista room',
        spellIds: ['great-soul-arrow'],
      },
      {
        id: 'ch03-s05',
        text: 'Titanite Slab in the Pharros lockstone contraption under ballista room (Supreme Weapon)',
      },
      {
        id: 'ch03-s06',
        text: 'White Sign Soapstone given by Pate after escaping his trap',
      },
      {
        id: 'ch03-s07',
        text: 'Cale the Cartographer is here; exhaust dialogue to gain access to Majula Mansion and return here to relocate him after you\'ve cleared the basement. (Curious Map/Gathering of Exiles)',
        subAchievementIds: [{ achievementId: 'gathering-of-exiles', subItemId: 'cale' }],
      },
      {
        id: 'ch03-s08',
        text: 'Door before boss fight requires \'Iron Key\' from Iron Keep. (Important later)',
      },
      {
        id: 'ch03-s09',
        text: 'Pursuer Boss; you can fight him on the platform (one time occurrence) or fight him in his natural spot. There was a door before the last fog in the area with a giant sword in the wall that you can walk on, requires the Soldier Key (see below). This leads to the Pursuer fight should you not have killed him earlier. Required to complete the game, can be saved for later.',
      },
      {
        id: 'ch03-s10',
        text: 'Last Giant - Defeat the Last Giant',
        achievementIds: ['last-giant'],
        subAchievementIds: [{ achievementId: 'curious-map', subItemId: 'flame-1' }],
      },
      {
        id: 'ch03-s11',
        text: 'This is the main boss for the Forest of Fallen Giants and has two NPC summons available. If you got through Pate\'s trap successfully and exhausted his dialogue, then his sign will be before the fog gate. Sellsword Luet\'s shade summon is also in the same area.',
      },
      {
        id: 'ch03-s12',
        text: 'Upon beating the Last Giant, you will be awarded the Soldier Key which opens three doors.',
      },
      {
        id: 'ch03-s13',
        text: '1. Door to the Pursuer',
      },
      {
        id: 'ch03-s14',
        text: '2. Door to the fourth bonfire; Soldier\'s Rest',
      },
      {
        id: 'ch03-s15',
        text: '3. Door to the King\'s Gate for Memory of Vammar',
      },
      {
        id: 'ch03-s16',
        text: 'After that, your next task is to collect all four Great Souls. Pick any section you wish or follow this guide chronologically.',
      },
    ],
  },
  {
    id: 'ch05-heides-tower-of-flame',
    title: 'Heide\'s Tower of Flame',
    summary: 'From Majula, head towards the stone pathway next to the cliff closer to the Mansion. This will lead to a rotunda with a mechanism. The path leads you to Heide\'s Tower of Flame.',
    steps: [
      {
        id: 'ch05-s01',
        text: 'There are two switches you want to activate in this area which alters the boss area to be easier',
      },
      {
        id: 'ch05-s02',
        text: 'Switch 1: Behind the Old Knight after the gate',
      },
      {
        id: 'ch05-s03',
        text: 'Switch 2: Near the door of the circular room you enter after the gate',
      },
      {
        id: 'ch05-s04',
        text: 'After the second switch, head to your right for the end of the area.',
      },
      {
        id: 'ch05-s05',
        text: 'Masterless Glencour can be summoned',
      },
      {
        id: 'ch05-s06',
        text: 'Licia of Lindeldt is located after the boss fight. Exhaust her dialogue for Gathering of Exiles.',
        subAchievementIds: [{ achievementId: 'gathering-of-exiles', subItemId: 'licia' }],
      },
    ],
  },
  {
    id: 'ch06-cathedral-of-blue',
    title: 'Cathedral of Blue',
    summary: 'Lost Sinner Primal Bonfire [1/4]',
    steps: [
      {
        id: 'ch06-s01',
        text: 'From the second switch of Heide\'s Tower of Flame, head to the left this time.',
      },
      {
        id: 'ch06-s02',
        text: 'When you aggro the Heide Knight at the top of the stairs, bring him down and dispatch of him. You do not want to fight him on the stairs due to the dragon. Once the Knight is down, sprint to the dragon as fast as possible. You may need to have your shield up should you run too slow.',
      },
      {
        id: 'ch06-s03',
        text: 'After the dragon is defeated, you can lower the drawbridge to fight the Old Dragonslayer',
      },
      {
        id: 'ch06-s04',
        text: 'After the boss, you can light the bonfire down the stairs.',
      },
      {
        id: 'ch06-s05',
        text: 'At the balcony, Blue Sentinel Targray leads the Blue Sentinels covenant and you can get the Protector\'s Covenant achievement as well as the Duel Bow gesture if you have a Token of Fidelity.',
        achievementIds: ['protector-covenant'],
        subAchievementIds: [{ achievementId: 'gesture-maestro', subItemId: 'duel-bow' }],
      },
      {
        id: 'ch06-s06',
        text: 'Token of Fidelity can be obtained by defeating a boss in co-op while not a member of the Heirs of the Sun or the corpse loot next to the Bridge Approach bonfire in Huntsman\'s Corpse',
      },
    ],
  },
  {
    id: 'ch07-no-mans-wharf',
    title: 'No Man\'s Wharf',
    summary: 'Lost Sinner Primal Bonfire [1/4]',
    steps: [
      {
        id: 'ch07-s01',
        text: 'First instance of Lucatiel\'s Quest: After you cross the docks and meet the first set of stairs, she\'s up the first set then in the building to the left. Exhaust her dialogue. Allows her to be summoned later in this level.',
        subAchievementIds: [{ achievementId: 'lucatiel', subItemId: 'dialogue-1' }],
      },
      {
        id: 'ch07-s02',
        text: 'After going all the way up, you\'ll find a bell to ring that calls the ship to the docks.',
      },
      {
        id: 'ch07-s03',
        text: 'On the way down, there is a house with poison jars inside and a chest. The chest has a \'Fragrant Branch of Yore\'.',
      },
      {
        id: 'ch07-s04',
        text: 'After descending back to the docks on the opposite side of the bonfire, kick the bridge down to set the shortcut.',
      },
      {
        id: 'ch07-s05',
        text: 'Take the other dock path close to the bridge shortcut and you will find Carhillion of the Fold. You need 8 INT for him to talk to you (only need it once, not everytime). Exhaust his dialogue for him to move to Majula (Gathering of Exiles). He sells sorcery spells.',
        subAchievementIds: [{ achievementId: 'gathering-of-exiles', subItemId: 'carhillion' }],
      },
      {
        id: 'ch07-s06',
        text: 'Taking the dock route to the ship, before the docks narrow, Lucatiel\'s sign will be on the corner to the right. She can be easily used as bait against the Flexile Sentry.',
        subAchievementIds: [{ achievementId: 'lucatiel', subItemId: 'summon-1' }],
      },
      {
        id: 'ch07-s07',
        text: 'Flexile Sentry will be the boss on the boat.',
      },
      {
        id: 'ch07-s08',
        text: 'After the boss, head up the ladder and you\'ll see a map and a chest containing the Fireball Pyromancy.',
        spellIds: ['fireball'],
      },
      {
        id: 'ch07-s09',
        text: 'Use the map to go to Lost Bastille.',
      },
    ],
  },
  {
    id: 'ch08-lost-bastille',
    title: 'Lost Bastille',
    summary: 'Lost Sinner Primal Bonfire [1/4]',
    steps: [
      {
        id: 'ch08-s01',
        text: 'Activate the Exile Holding Cell bonfire, and proceed up the stairs and to the drop down. Continue left and the alley contains an Estus Flask Shard. Pull the lever to open the gate.',
      },
      {
        id: 'ch08-s02',
        text: 'At the top of the stairs, an undead jailer will kick an explosive barrel down the stairs. You want this barrel to hit the giant crack in the wall to blow up the wall to gain access to Steady Hand McDuff and the bonfire. If the barrel doesn\'t explode, push it to the wall, then ignite with fire. Access the bonfire and warp to \'A Tower Apart\' bonfire.',
        achievementIds: ['smith-for-life'],
      },
      {
        id: 'ch08-s03',
        text: 'Now from the \'A Tower Apart\' bonfire:',
      },
      {
        id: 'ch08-s04',
        text: 'To the left in a chest will be the Antiquated Key if you have any interest in that.',
      },
      {
        id: 'ch08-s05',
        text: 'Once you leave the area, you can head straight passed the Undead Jailer. You\'ll want to break the boxes in front of the door as it\'s jamming it shut (use a firebomb if you\'re on the other side.)',
      },
      {
        id: 'ch08-s06',
        text: 'In this tower are two important things: The first is Lucatiel\'s second spot. Exhaust her dialogue here so she can be summoned during Sinner\'s Rise. She is not available for summon for the boss of this area.',
        subAchievementIds: [{ achievementId: 'lucatiel', subItemId: 'dialogue-2' }],
      },
      {
        id: 'ch08-s07',
        text: 'Near the tower, cross the rubble and open the doorway. Both ways lead to the boss fight.',
      },
      {
        id: 'ch08-s08',
        text: 'There are 3 Ruin Sentinels you have to fight, if you have trouble dealing with three at once, simply stay on the platform you end up on as you enter the fog gate so you can dispatch the first one. After the first one, another one may jump, or both. They attack as they jump up so be wary.',
      },
      {
        id: 'ch08-s09',
        text: 'Boss Soul trades for Heavy Homing Soul Arrow with Straid.',
        spellIds: ['heavy-homing-soul-arrow'],
      },
      {
        id: 'ch08-s10',
        text: 'After the boss fight, all of the walls for illusory doors. They\'re all opened with the confirm key. One of the rooms will have a ladder in it, climb up and open the chest for the Hush Sorcery.',
        spellIds: ['hush'],
      },
      {
        id: 'ch08-s11',
        text: 'Continue into the next room minding the explosive mummy and to the Servants\' Quarters bonfire.',
      },
      {
        id: 'ch08-s12',
        text: 'Head over to the doorway and outside. If you go to the edge of the broken bridge and break the boxes, you\'ll find the Bastille Key which is required for Sinner\'s Rise and may help accessing McDuff if you can\'t get the barrel to roll in your favor.',
      },
      {
        id: 'ch08-s13',
        text: 'Continue until you meet up with a gate, but instead head up stairs where you see a bunch of mummies. Dispatch of them and head to the middle cell where Straid of Olaphis is. You need 3 intelligence and 3 faith in order to talk to him. You should have another Fragrant Branch of Yore with you. See respective mastery section. He also possesses the Mock gesture for Gesture Maestro as well.',
        subAchievementIds: [{ achievementId: 'gesture-maestro', subItemId: 'mock' }],
      },
    ],
  },
  {
    id: 'ch09-belfry-luna',
    title: 'Belfry Luna',
    summary: 'Belfry Luna isn\'t quite required in order to 100% this, but depending how you play, we\'ll go through it anyways.',
    steps: [
      {
        id: 'ch09-s01',
        text: 'From the Servants\' Quarters bonfire, head down the ladder. You\'ll be confronted by a Pursuer.',
      },
      {
        id: 'ch09-s02',
        text: 'Place a Pharros Lockstone into the contraption to reveal a illusory door that leads to Belfry Luna. Once you step onto the bridge, you\'re susceptible to grey phantom invasions, up to 3 per life.',
      },
      {
        id: 'ch09-s03',
        text: 'Once inside, you can speak to the dwarf to the right until he offers you to join the Bell Keepers and unlocking the \'Clangorous Covenant\' achievement.',
        achievementIds: ['clangorous-covenant'],
      },
      {
        id: 'ch09-s04',
        text: 'Head up the stairs and go up the ladder and pull the lever to open the gate that leads to the boss. Head down and go through the boss gate.',
      },
      {
        id: 'ch09-s05',
        text: 'Masterless Glencour has a summoning sign under one of the stairs.',
      },
      {
        id: 'ch09-s06',
        text: 'Should you opt for online play for Rank 2 in the Bell Keepers, then this area is perfect for that. If not, see Belfry Sol for an easier farming method.',
      },
    ],
  },
  {
    id: 'ch10-sinners-rise',
    title: 'Sinner\'s Rise',
    summary: 'This is the separate tower near Straid\'s cell. Simply cross the bridge and go up for a bonfire. Else, go down.',
    steps: [
      {
        id: 'ch10-s01',
        text: 'Once you head down the lift, you will immediately see Lucatiel\'s Summoning sign. Be wary as there are a few large beasts as well as the Flexile Sentry in the water.',
        subAchievementIds: [{ achievementId: 'lucatiel', subItemId: 'summon-2' }],
      },
      {
        id: 'ch10-s02',
        text: 'After navigating to the gates, use the Bastille Key. Cross the catwalk over the water and open up both doors and light the oil to illuminate the boss room.',
      },
      {
        id: 'ch10-s03',
        text: 'The Lost Sinner is an easy boss fight if you lit up the right allowing you to lock on.',
      },
      {
        id: 'ch10-s04',
        text: 'After the fight, open up the chest for another Fragrant Branch of Yore then use light the Primal Bonfire.',
      },
      {
        id: 'ch10-s05',
        text: 'Sinner\'s Bonfire - Light the primal bonfire in Sinner\'s Rise.',
        achievementIds: ['sinners-bonfire'],
        subAchievementIds: [{ achievementId: 'curious-map', subItemId: 'flame-2' }],
      },
    ],
  },
  {
    id: 'ch11-huntsmans-copse',
    title: 'Huntsman\'s Copse',
    summary: 'With Licia of Lindelt moved to Majula, she\'ll be in the rotunda and you can pay her 2,000 souls to move the gate allowing you to access Huntsman\'s Copse.',
    steps: [
      {
        id: 'ch11-s01',
        text: 'The first NPC you\'ll meet is Felken the Outcast. Should you have 8 Faith/Intelligence, you can access his shop with hex spells. 20 Faith/Intelligence will get you his Sunset Staff w/o killing him.',
      },
      {
        id: 'ch11-s02',
        text: 'Continue on the path until you reach the second bonfire of the area. Across the bridge gap is a Token of Fidelity and a Pharros Lockstone.',
      },
      {
        id: 'ch11-s03',
        text: 'Continue along the cliff side and cross the bridge. Head straight and you\'ll notice some loot in a hut to the right. Inside the hut is a Syan Knight and the Soul Spear sorcery (1 of 2).',
        spellIds: ['soul-spear'],
      },
      {
        id: 'ch11-s04',
        text: 'Straight ahead is Bashful Ray\'s shade summoning. From there, go up the hill and the hut to the left will have the lever that lowers the bridge.',
      },
      {
        id: 'ch11-s05',
        text: 'Before the bridge, you\'ll see a hut to your right with a hole in the roof. A Sublime Bone Dust is inside.',
      },
      {
        id: 'ch11-s06',
        text: 'Across the bridge is another hut with a bonfire and Creighton. You will need the Undead Lockaway Key in order to open this area. Creighton offers the \'Fist Pump\' gesture for Gesture Maestro.',
        subAchievementIds: [{ achievementId: 'gesture-maestro', subItemId: 'fist-pump' }],
      },
      {
        id: 'ch11-s07',
        text: 'Cross the smaller bridge and you\'ll see a path diverge up the hill. Take that hill path and you\'ll find the Undead Lockaway Key at the top on a body. Return to Creighton to pickup the gesture and head to the boss area.',
      },
      {
        id: 'ch11-s08',
        text: 'The only available summon for the area was Bashful Ray so you can bring him along if you want.',
      },
      {
        id: 'ch11-s09',
        text: 'The Skeleton Lords themselves aren\'t an issue, but each one you kill summons tons of skeletons including the every so annoying pinwheels. Only tip is to kill one lord at a time while dispatching the smaller underlings.',
      },
    ],
  },
  {
    id: 'ch12-undead-purgatory',
    title: 'Undead Purgatory',
    summary: 'Starting from the Bridge Approach bonfire in Huntsman\'s Copse.',
    steps: [
      {
        id: 'ch12-s01',
        text: 'After the first bridge, take the right where you\'ll cross tons of dark warriors. Then cross the bridge where you will be invaded.',
      },
      {
        id: 'ch12-s02',
        text: 'No possible summons for this boss. Use the divots in the wall to dodge the Chariot each time it passes. There are two necromancers that will keep reviving the skeletons so take them out then the skeletons. Get to the end of the path to close the gate on the chariot then finish him off.',
      },
      {
        id: 'ch12-s03',
        text: 'After the boss fight, you\'ll find Titchy Gren who leads the Brotherhood of Blood as well as sells pyromancy. You\'ll need a Token of Spite to get her to talk which can be found in a chest before The Gutter.',
        achievementIds: ['sanguinary-covenant'],
      },
    ],
  },
  {
    id: 'ch13-harvest-valley',
    title: 'Harvest Valley',
    summary: 'Iron Keep Primal Bonfire [2/4]',
    steps: [
      {
        id: 'ch13-s01',
        text: 'After arriving in Harvest Valley, you\'ll find Stone Trader Chloanne at the top of the peak. Exhaust her dialogue to relocate her to Majula (Gathering of Exiles).',
        subAchievementIds: [{ achievementId: 'gathering-of-exiles', subItemId: 'chloanne' }],
      },
      {
        id: 'ch13-s02',
        text: 'Nothing of importance so you can make your way to the second bonfire after the gate. From here, the second set of poison mist contains the Chameleon sorcery. This is its only appearance.',
        spellIds: ['chameleon'],
      },
      {
        id: 'ch13-s03',
        text: 'Across the wooden bridge then take the path left to discover the Heirs of the Sun Covenant. Talk to the altar until it asks you to join for the \'Brilliant Covenant\' achievement. The altar will also teach you the fabled \'Praise the Sun\' gesture for Gesture Maestro.',
        achievementIds: ['brilliant-covenant'],
        subAchievementIds: [{ achievementId: 'gesture-maestro', subItemId: 'praise-the-sun' }],
      },
      {
        id: 'ch13-s04',
        text: 'If you have spare poison moss, you can take the further path into Earthen Peak down lower to meet up with Lucatiel in a room. Exhaust her dialogue to move her to her next location.',
        subAchievementIds: [{ achievementId: 'lucatiel', subItemId: 'dialogue-3' }],
      },
      {
        id: 'ch13-s05',
        text: 'Otherwise, go ahead and fight the Covetous Demon. You can shoot the pots inside to drop undeads and bait him into eating them while you dish out damage.',
      },
    ],
  },
  {
    id: 'ch14-earthen-peak',
    title: 'Earthen Peak',
    summary: 'Iron Keep Primal Bonfire [2/4]',
    steps: [
      {
        id: 'ch14-s01',
        text: 'Once in, there isn\'t any required loot. So continue across the bridge minding the ranged enemies to parallel bridge. At the end, you\'ll find a summon sign for Devotee Scarlet. Head up and you will see a wind mill and a fog gate with a bonfire. Light the windmill on fire to drain all poison.',
      },
      {
        id: 'ch14-s02',
        text: 'If you didn\'t talk to Lucatiel before the Covetous Demon due to the poison, the poison is now drained thus making it much safer to traverse.',
      },
      {
        id: 'ch14-s03',
        text: 'Now head up the stairs and head out the door way. You can summon Bashful Ray and break the wooden fence and head left to find Laddersmith Gilligan. Pay him 2,000 souls then exhaust his dialogue to move him in Majula (Gathering of Exiles). He also teaches you \'Prostration\' gesture for Gesture Maestro.',
        subAchievementIds: [{ achievementId: 'gathering-of-exiles', subItemId: 'gilligan' }, { achievementId: 'gesture-maestro', subItemId: 'prostration' }],
      },
      {
        id: 'ch14-s04',
        text: 'Go back into the doorway and up the ladder. Take the narrow path and up the stairs. You can go up stairs and get the bonfire behind the illusory doors or go ahead and fight the boss. Jester Thomas summon sign is near the stairs.',
      },
    ],
  },
  {
    id: 'ch15-iron-keep-part-1',
    title: 'Iron Keep - Part 1',
    summary: 'In Iron Keep, you\'ll notice quite a bit of lava. So be prepared for fire defenses should you need them.',
    steps: [
      {
        id: 'ch15-s01',
        text: 'Go straight across the bridge and open the doors. You will be ambushed by some invaders. To the right is Magerold of Lanafir who leads the Dragon Covenant, but you cannot access it.',
      },
      {
        id: 'ch15-s02',
        text: 'In the main room, you\'ll notice some loot under a flaming bull head. You can no longer take it without dying, but you do need it later on so place a mental note here. It\'s the Iron Key.',
      },
      {
        id: 'ch15-s03',
        text: 'Head into the next room and out the door. You should be able to see a bridge in mid air and a lever down straight ahead. Pull the lever in order to lower one side of the bridge and cross the bridge.',
      },
      {
        id: 'ch15-s04',
        text: 'If you have not talked to Lucatiel in Black Gulch, this guide hasn\'t been there yet, then chances are you won\'t have a summon sign for her at the end of the bridge. If you need to summon her here, then skip to the Black Gulch section then return here.',
      },
      {
        id: 'ch15-s05',
        text: 'Smelter demon has some pretty strong attacks, but has no real health of its own. The only note is that you cannot drag out this fight and his fire aura does do damage.',
      },
    ],
  },
  {
    id: 'ch16-belfry-sol',
    title: 'Belfry Sol',
    summary: 'You\'re going to need a Pharros Lockstone in order to access Belfry Sol. From the Ironheath Hall bonfire, head into the door way and across the bridge. Head into the room to the left and use the Pharros Lockstone to reveal a ladder that leads you to the Belfry Sol bonfire.',
    steps: [
      {
        id: 'ch16-s01',
        text: 'Head up the ladder and should you skip Belfry Luna, you can join the Bell Keepers here and get the \'Clangorous Covenant\' achievement.',
        achievementIds: ['clangorous-covenant'],
      },
      {
        id: 'ch16-s02',
        text: 'Overall a very short area, but go in make sure to pull the lever near the towers to ring the bell and lift the gate.',
      },
      {
        id: 'ch16-s03',
        text: 'At the end of the area, you\'ll find a chest with the Immolation pyromancy.',
        spellIds: ['immolation'],
      },
    ],
  },
  {
    id: 'ch17-iron-keep-part-2',
    title: 'Iron Keep - Part 2',
    summary: 'You can continue in Iron Keep right after Belfry Sol, or you can start from Ironheath Hall bonfire.',
    steps: [
      {
        id: 'ch17-s01',
        text: 'The key thing to note here is the Chaos Storm pyromancy. In the second room with the lever that lowers and raises the platforms, you will notice a chest in the back left. To access this, you\'ll need to combine the Smelter Demon armor purchasable from Maughlin the Armorer in Majula, the urns of water at the very top, and either flash sweat pyromancy or small orange blurrs. Do the urns last and make sure to clear out the mobs so you have a clear path. Once that\'s all done, roll through the urns then drop down twice to the lava path and then run towards the chest. Heal when necessary.',
        spellIds: ['chaos-storm'],
      },
      {
        id: 'ch17-s02',
        text: 'Once you get that, proceed in the area until you reach the fire-breathing bull mechanisms. There is a ladder to the left in the back that leads to a phantom and another ladder. Climb that for a bonfire and then pull the lever to disable the fire.',
      },
      {
        id: 'ch17-s03',
        text: 'Manhunter O\'harrah\'s summoning sign is at the bottom of the ladders. Head into the next area and you\'ll be at the Old Iron King.',
      },
      {
        id: 'ch17-s04',
        text: 'Chances are, your summon is probably going to get wrecked by the Old Iron King, or he gets knocked off so you\'re better off learning his attack pattern as they\'re easy to dodge.',
      },
      {
        id: 'ch17-s05',
        text: 'After the fight, head down and light the primal bonfire.',
      },
      {
        id: 'ch17-s06',
        text: 'Iron Keep Bonfire - Light the primal bonfire in the Iron Keep.',
        achievementIds: ['iron-keep-bonfire'],
        subAchievementIds: [{ achievementId: 'curious-map', subItemId: 'flame-4' }],
      },
    ],
  },
  {
    id: 'ch18-the-pit',
    title: 'The Pit',
    summary: 'You will have to revisit this area later on as there are some important items in here once you\'ve retrieved the Forgotten Key.',
    steps: [
      {
        id: 'ch18-s01',
        text: 'It\'s probably important that you have Laddersmith Gilligan in Majula so you can buy ladders that makes going down much easier. He sells three ladders: 500 souls, 3,500 souls, and 12,000 souls.',
      },
      {
        id: 'ch18-s02',
        text: 'You\'ll also want the Silvercat Ring so you can drop down without losing too much health. You can also unequip armor/weapons to lower damages.',
      },
      {
        id: 'ch18-s03',
        text: 'To skip Grave of Saints, go down the 12,000 soul ladder and then drop down until you find the doorway.',
      },
      {
        id: 'ch18-s04',
        text: 'You need Grave of Saints for two reasons, so head down the 3,500 soul ladder or the 500 soul ladder. Or no ladder if you can survive the fall. The first doorway you see will lead to Grave of Saints.',
      },
    ],
  },
  {
    id: 'ch19-grave-of-saints',
    title: 'Grave of Saints',
    summary: 'Black Gulch Primal Bonfire [3/4]',
    steps: [
      {
        id: 'ch19-s01',
        text: 'Once you step foot in here, you\'re fair game to be summoned into a world hosted by a member of the Rat King covenant so be careful.',
      },
      {
        id: 'ch19-s02',
        text: 'The only unique loot is the Whisper of Despair hex. Once you get to the bridges, use a Pharros Lockstone on the spot where a bridge could drop down at. Head across the bridge, and up the stairs will be the hex spell on a body.',
        spellIds: ['whisper-of-despair'],
      },
      {
        id: 'ch19-s03',
        text: 'Head to the end of the level with the bonfire. Large AoE attacks are extremely useful and you do need this boss soul to trade for Toxic Mist with Straid.',
        spellIds: ['toxic-mist'],
      },
      {
        id: 'ch19-s04',
        text: 'After fighting the Royal Rat Vanguard, enter the next area and you should see the Rat King on some bones. Talk to him for the Rat King Covenant and the \'Gnawing Covenant\' achievement.',
        achievementIds: ['gnawing-covenant'],
      },
    ],
  },
  {
    id: 'ch20-the-gutter',
    title: 'The Gutter',
    summary: 'Black Gulch Primal Bonfire [3/4]',
    steps: [
      {
        id: 'ch20-s01',
        text: 'Following the Grave of Saints and dropping down a ton, you\'ll end up on a bridge with a Crystal Lizard. Under you are explosive mummies and you can see the Great Heal miracle on the ground (1 of 2 locations).',
        spellIds: ['great-heal'],
      },
      {
        id: 'ch20-s02',
        text: 'Once down, you can go through the tunnels and descend some ladders. At the bottom will be a chest containing a Token of Spite required for joining the Brotherhood of Blood in the Undead Purgatory.',
      },
      {
        id: 'ch20-s03',
        text: 'Upon entering the Gutter, you\'ll be in a near pitch black area so you may want to bring a torch with you to light up all the scones.',
      },
      {
        id: 'ch20-s04',
        text: 'Once you reach the second bonfire, go back to the area with all the ladders. Go down the ladder with the pots blocking it. Dropping down will lead you to some pots and then a chest with the Great Club. Drop down some more for the Dark Fog hex.',
        spellIds: ['dark-fog'],
      },
      {
        id: 'ch20-s05',
        text: 'From there, climb down. You\'ll notice some spiky pots. Do not attack them as they\'re filled with corrosive acid. Break them from afar with iron arrows, or urns. Drop down and loot the Fragrant Branch of Yore. Head through the fog gate.',
      },
    ],
  },
  {
    id: 'ch21-black-gulch',
    title: 'Black Gulch',
    summary: 'Black Gulch Primal Bonfire [3/4]',
    steps: [
      {
        id: 'ch21-s01',
        text: 'To the left is the first bonfire. Continue down the path. All these statues you see, they all shoot poison so you will have to break a majority of them. At the bottom of the slope before you even encounter the first poison pool, you can drop down off the cliff and onto a platform leading to a tunnel.',
      },
      {
        id: 'ch21-s02',
        text: 'Inside the tunnel will be Lucatiel provided you kept up with her side mission til now. Exhaust her dialogue to move her to her final location in Aldia\'s Keep as well as make her available to summon later on in this level.',
        subAchievementIds: [{ achievementId: 'lucatiel', subItemId: 'dialogue-4' }],
      },
      {
        id: 'ch21-s03',
        text: 'Go up and drop down. Head to your right and into the cave for Great Magic Weapon sorcery in the chest.',
        spellIds: ['great-magic-weapon'],
      },
      {
        id: 'ch21-s04',
        text: 'Go back out and down. You can summon both Bashful Ray and Manhunter O\'harrah near the pots and in between the razorbacks. The corpse near the first razorback will have the Scraps of Life hex.',
        spellIds: ['scraps-of-life'],
      },
      {
        id: 'ch21-s05',
        text: 'After the second razorback, you can actually drop down once more. The first drop will lead you to a stone door that requires the Forgotten Key and has Darkgiver Grandahl behind it for the Pilgrims of Dark.',
      },
      {
        id: 'ch21-s06',
        text: 'From the spot you landed, drop down once more into a cave. This cave will lead to two Forgotten Giants. Kill them for a Soul of the Giant as well as the Forgotten Key.',
      },
      {
        id: 'ch21-s07',
        text: 'Take the cage elevator back up and you\'ll be in the wider lower part of the level. You will also be invaded by a pair of woodlands. Don\'t forget to revisit the locked door to talk to Darkgiver Grandahl and get your second condition to join the Pilgrims of Dark.',
      },
      {
        id: 'ch21-s08',
        text: 'Head straight to the edge and you\'ll notice a cave with a small ledge path you can walk on. Use a Fragrant Branch of Yore and proceed to the bonfire. Lucatiel\'s summoning sign will also be next to the bonfire.',
        subAchievementIds: [{ achievementId: 'lucatiel', subItemId: 'summon-3' }],
      },
      {
        id: 'ch21-s09',
        text: 'Proceed to fight The Rotten behind the giant fog gate. Lucatiel has a high chance of dying here due to both the Rotten\'s potent attack and the lava pits so you\'ll want to dish out damage fast or summon additional NPCs/players to help.',
      },
      {
        id: 'ch21-s10',
        text: 'After that, there is a fairly well hidden cave that leads to a chest. Then the primal bonfire afterwards.',
      },
      {
        id: 'ch21-s11',
        text: 'There is also a portal that leads to the first DLC: Crown of the Sunken King. This will be mentioned later on.',
      },
      {
        id: 'ch21-s12',
        text: 'Gulch Bonfire - Light the primal bonfire in the Black Gulch.',
        achievementIds: ['gulch-bonfire'],
        subAchievementIds: [{ achievementId: 'curious-map', subItemId: 'flame-3' }],
      },
    ],
  },
  {
    id: 'ch22-shaded-woods',
    title: 'Shaded Woods',
    summary: 'You should buy the Ring of Whispers from Sweet Shalquoir. From Majula, there is a woody door that leads to a building. Take that path.',
    steps: [
      {
        id: 'ch22-s01',
        text: 'Outside of the building will be Benhart of Jugo, exhaust his dialogue.',
        subAchievementIds: [{ achievementId: 'moonlight-greatsword', subItemId: 'dialogue-1' }],
      },
      {
        id: 'ch22-s02',
        text: 'Head inside and use a Fragrant Branch of Yore on Rosabeth of Melfia.',
      },
      {
        id: 'ch22-s03',
        text: 'After she\'s back to normal, she will request clothing. Anything works and you only need one. After that, exhaust her dialogue then go back to Majula to prevent killing her in the following encounter. (Gathering of Exiles)',
        subAchievementIds: [{ achievementId: 'gathering-of-exiles', subItemId: 'rosabeth' }],
      },
      {
        id: 'ch22-s04',
        text: 'Change of Clothes - Give Rosabeth of Melfia something to wear',
        achievementIds: ['change-of-clothes'],
      },
      {
        id: 'ch22-s05',
        text: 'Once you make it back, talk to Benhart again who will give the \'Joy\' gesture for Gesture Maestro. Exhaust his dialogue to progress his sidequest.',
        subAchievementIds: [{ achievementId: 'moonlight-greatsword', subItemId: 'dialogue-2' }, { achievementId: 'gesture-maestro', subItemId: 'joy' }],
      },
      {
        id: 'ch22-s06',
        text: 'Follow the path to the next bonfire with three split paths. Take the foggy path.',
      },
      {
        id: 'ch22-s07',
        text: 'In the fog, follow the left wall until you reach a ton of broken rubble on the ground. On top of the rubble you should see some red cloth. It is Vengarl\'s head.',
      },
      {
        id: 'ch22-s08',
        text: 'Reflections on Disembodiment - Inherit equipment from the head of Vengarl.',
        achievementIds: ['reflections-on-disembodiment'],
      },
      {
        id: 'ch22-s09',
        text: 'Exhaust his dialogue to receive his helmet and the achievement.',
      },
      {
        id: 'ch22-s10',
        text: 'Talk to him again and learn his \'Decapitate\' gesture. How ironic.',
        subAchievementIds: [{ achievementId: 'gesture-maestro', subItemId: 'decapitate' }],
      },
      {
        id: 'ch22-s11',
        text: 'After that, again follow the left wall and make a mental note of the ground. Should you get lost, you want to be going up hill. If you went the right way, you should be seeing the fog dissipate.',
      },
      {
        id: 'ch22-s12',
        text: 'In the Shaded Ruins, you will find a bonfire. There is a petrified Lion mage near by who holds the Fang Key required to save Ornifex that\'s at the bottom of the bigger broken wooden pit.',
      },
      {
        id: 'ch22-s13',
        text: 'However, you want to head left into the building with the cursed pots and the ghost warrior. Go passed them and you should arrive at a sand pit. Equip the Ring of Whispers and talk to the giant manscorpion named Tark. Once you clear the area boss for Shaded Woods, you pickup the \'Warm-up\' gesture from him. This also lets you summon Tark. Either walk back or go forward if you have enough Fragrant Branch of Yore.',
        subAchievementIds: [{ achievementId: 'gesture-maestro', subItemId: 'warmup' }],
      },
      {
        id: 'ch22-s14',
        text: 'Head back to the main area and go straight ahead with the barrels. Break the barrels down and open the chest for the Repair sorcery. This is its only occurrence.',
        spellIds: ['repair'],
      },
      {
        id: 'ch22-s15',
        text: 'If you want to access Weaponsmith Ornifex, walk over the wooden boards and open the door.',
      },
      {
        id: 'ch22-s16',
        text: 'Head over to the buildings, walk passed the building and look for some planks on the ground. Walk over them to drop down to Darkgiver Grandahl. This is his second position.',
      },
      {
        id: 'ch22-s17',
        text: 'Head up the hill to the fog gate. Tark\'s summoning sign will be here as well.',
      },
      {
        id: 'ch22-s18',
        text: 'For the most part, Scorpioness Najka is easy especially while using Tark as bait.',
      },
    ],
  },
  {
    id: 'ch23-door-of-pharros',
    title: 'Door of Pharros',
    summary: 'In Scholar of the First Sin, this area is no longer required as the door above Gavlan\'s final spot is now automatically opened. However, you still need the Royal Rat Authority\'s boss soul.',
    steps: [
      {
        id: 'ch23-s01',
        text: 'After climbing up the ladder, the corpse ahead has the Twisted Barricade hex.',
        spellIds: ['twisted-barricade'],
      },
      {
        id: 'ch23-s02',
        text: 'Once you reach the second bonfire, you\'ll be next to the boss arena. The boss is fairly difficulty depending your build. It\'s strong against casters but weak against melee builds. Just take out the smaller rats as soon as possible then concentrate of the giant rat.',
      },
    ],
  },
  {
    id: 'ch24-brightstone-cove-tseldora',
    title: 'Brightstone Cove Tseldora',
    summary: 'Brightstone Cove Tseldora Primal Bonfire [4/4]',
    steps: [
      {
        id: 'ch24-s01',
        text: 'The most important part of this area is to simply summon Benhart of Jugo whose summoning sign is in one of the bigger tents.',
        subAchievementIds: [{ achievementId: 'moonlight-greatsword', subItemId: 'summon-1' }],
      },
      {
        id: 'ch24-s02',
        text: 'You\'ll just need to take Benhart all the way to Prowling Magus & Congregation which is an extremely easy fight.',
      },
      {
        id: 'ch24-s03',
        text: 'After the boss area, walk out the doorway. To your right is a bonfire. To your left up the ladder is Cromwell the Pardoner who you may need for specific miracles or hexes.',
      },
      {
        id: 'ch24-s04',
        text: 'You can skip most of the level by rolling down the rock platforms to reach the sand.',
      },
      {
        id: 'ch24-s05',
        text: 'Continue through the door and through the next sandy area. Head straight up and into the building. The only note here is the door on the right has the Great Fireball pyromancy opened by the Brightstone Key dropped after the next boss.',
        spellIds: ['great-fireball'],
      },
      {
        id: 'ch24-s06',
        text: 'Manhunter O\'harrah\'s summoning sign is on the left side of this room.',
      },
      {
        id: 'ch24-s07',
        text: 'Head through the gate and up the ladder then drop down onto the webs. There are tons of spiders around this area. At the bottom there is a summoning sign for Ashen Knight Boyd behind a pillar.',
      },
      {
        id: 'ch24-s08',
        text: 'Only note about Duke\'s Dear Freja is that you can only attack one of her two faces. Also after the boss fight, be sure to examine the red glowing cloud near the ledge to embrace the Great Soul.',
      },
      {
        id: 'ch24-s09',
        text: 'Next room you can kill the Duke for a Fragrant Branch of Yore and the Brightstone Key.',
      },
      {
        id: 'ch24-s10',
        text: 'Continue and light the primal bonfire.',
      },
      {
        id: 'ch24-s11',
        text: 'Brightstone Bonfire - Light the primal bonfire in Brightstone Cove Tseldora.',
        achievementIds: ['brightstone-bonfire'],
        subAchievementIds: [{ achievementId: 'curious-map', subItemId: 'flame-5' }],
      },
    ],
  },
  {
    id: 'ch25-drangleic-castle',
    title: 'Drangleic Castle',
    summary: 'From the Shaded Ruins crossroad bonfire, take the path that\'s opposite of the fog. It\'ll lead you to the Shrine of Winter. Simply go forward and you\'ll end up at Drangleic Castle.',
    steps: [
      {
        id: 'ch25-s01',
        text: 'At the gates, you need to kill enemies near the two statues to sacrifice their souls to animate the statues. To the far right of the gate is the Great Combustion pyromancy in a chest.',
        spellIds: ['great-combustion'],
      },
      {
        id: 'ch25-s02',
        text: 'Once inside, you will find Chancellor Wellager midway up the stairs. Exhaust his dialogue and learn the \'This One\'s Me\' gesture for Gesture Maestro.',
        subAchievementIds: [{ achievementId: 'gesture-maestro', subItemId: 'this-ones-me' }],
      },
      {
        id: 'ch25-s03',
        text: 'In the King\'s Gate bonfire room, you\'ll notice tons of stone statues and 6 doors. The only two doors you need to worry about are the farthest door on the left and the closest door on the right.',
      },
      {
        id: 'ch25-s04',
        text: 'Farthest door on the left leads to the third and final location of Pilgrims of Dark. He should allow you to join now and obtain the \'Abysmal Covenant\' achievement. There\'s also a bonfire down here.',
        achievementIds: ['abysmal-covenant'],
      },
      {
        id: 'ch25-s05',
        text: 'Behind the door closest on the right, allows you to progress the area. Inside the room you will find the Frozen Flower which is required to access the Ivory King DLC.',
      },
      {
        id: 'ch25-s06',
        text: 'Continue through the level until you reach the throne room with Nashandra. Exhaust her dialogue and proceed to the boss room with the Twin Dragonriders. Easy fight.',
      },
      {
        id: 'ch25-s07',
        text: 'After the Twin Dragonriders, you\'ll be at Central Drangleic and you should see Benhart of Jugo sitting at the wall. Exhaust his dialogue to progress his sidequest.',
        subAchievementIds: [{ achievementId: 'moonlight-greatsword', subItemId: 'dialogue-3' }],
      },
      {
        id: 'ch25-s08',
        text: 'Go up the ladder and proceed through the door with the statues inside. The statues were removed because it was too hard apparently, so go through the next door and lure one of the headless manikin opponents into the previous room and kill him off near the statue to activate the elevator.',
      },
      {
        id: 'ch25-s09',
        text: 'Soul Greatsword sorcery located inside the chest. Unique spawn.',
        spellIds: ['soul-greatsword'],
      },
      {
        id: 'ch25-s10',
        text: 'Proceed to the next area with the foyer. One of the chests on the balconies is a mimic, the other is the Firestorm pyromancy; not unique.',
        spellIds: ['firestorm'],
      },
      {
        id: 'ch25-s11',
        text: 'Once the elevator is activated, return to the Central Drangleic bonfire and the elevator should have gone down. Take it up. inside you\'ll find the Key to King\'s Passage and the Strong Magic Shield sorcery in the chests.',
        spellIds: ['strong-magic-shield'],
      },
      {
        id: 'ch25-s12',
        text: 'Go back down and go through King\'s Passage. Benhart\'s summoning sign is on the left right before the boss gate. As for the Looking Glass Knight, his shield repels all projectile attacks and can also summon an npc or player to help him.',
        subAchievementIds: [{ achievementId: 'moonlight-greatsword', subItemId: 'summon-2' }],
      },
      {
        id: 'ch25-s13',
        text: 'Looking Glass Knight - Defeat Looking Glass Knight',
        achievementIds: ['looking-glass-knight'],
      },
      {
        id: 'ch25-s14',
        text: 'After the fight, they merged the two chests into one. Open the remaining chest to receive Soul Bolt sorcery and then head down the elevator. Unique spawn.',
        spellIds: ['soul-bolt'],
      },
    ],
  },
  {
    id: 'ch26-shrine-of-amana',
    title: 'Shrine of Amana',
    summary: 'Ashen Mist Heart',
    steps: [
      {
        id: 'ch26-s01',
        text: 'After the second bonfire, you\'ll encounter an Ogre. Behind the Ogre is a chest containing Sunlight Blade. This is not unique, sold by Straid after the Undead Crypt.',
        spellIds: ['sunlight-blade'],
      },
      {
        id: 'ch26-s02',
        text: 'After the third hut, inside the water is Fire Tempest pyromancy. While this isn\'t a unique spawn, it is by far the easiest method to obtain it. There is a chest you have to navigate to that\'s after the hut and towards the right.',
        spellIds: ['fire-tempest'],
      },
      {
        id: 'ch26-s03',
        text: 'After the third bonfire and the cave with the corrosive mists, you\'ll encounter a circular arena with pillars. You will find the Homing Crystal Soulmass sorcery on a corpse near a broken pillar.',
        spellIds: ['homing-crystal-soulmass'],
      },
      {
        id: 'ch26-s04',
        text: 'Continue on until you reach the boss.',
      },
    ],
  },
  {
    id: 'ch27-undead-crypt',
    title: 'Undead Crypt',
    summary: 'Ashen Mist Heart',
    steps: [
      {
        id: 'ch27-s01',
        text: 'Advance until you see someone asking you to not produce light, and do not produce light. Walk in and head to your right to find Grave Warden Agdayne. Exhausting his dialogue gives access to his shop, the \'Have Mercy\' gesture, and his summon sign later on. His rarest spell is the Warmth pyromancy followed by the Soul Spear sorcery.',
        subAchievementIds: [{ achievementId: 'gesture-maestro', subItemId: 'have-mercy' }],
        spellIds: ['soul-spear', 'warmth'],
      },
      {
        id: 'ch27-s02',
        text: 'Continue in the level until you reach the second bonfire. Destroy the grave looking statues to prevent pyromancers from spawning.',
      },
      {
        id: 'ch27-s03',
        text: 'After the hallway with the two greatshield enemies, you\'ll drop down into a trap. The path you want to go has a line down the middle of the path. There are illusory walls with a Pharros contraption, use it to find the Pharros door with the Great Lightning Spear miracle inside; not unique.',
        spellIds: ['great-lightning-spear'],
      },
      {
        id: 'ch27-s04',
        text: 'Continue on and pull the lever to unlock the shortcut. Proceed to the boss gate.',
      },
      {
        id: 'ch27-s05',
        text: 'Grave Warden Agdayne\'s summoning sign is located to the left before the stairs to the boss gate.',
      },
      {
        id: 'ch27-s06',
        text: 'After the boss fight, you can actually still fight King Vendrick and he still is weak during the first encounter. However, you need to deal bleed damage or use corrosive acids to trigger the boss fight; otherwise, he ignores you. Pick up the King\'s Ring on the corpse.',
      },
      {
        id: 'ch27-s07',
        text: 'King\'s Ring - Acquire the King\'s Ring',
        achievementIds: ['kings-ring'],
        subAchievementIds: [{ achievementId: 'curious-map', subItemId: 'flame-6' }],
      },
      {
        id: 'ch27-s08',
        text: 'This will give you the ability to open all King\'s Gate.',
      },
    ],
  },
  {
    id: 'ch28-aldias-keep',
    title: 'Aldia\'s Keep',
    summary: 'You\'ll have to go through the King\'s Gate in Shaded Woods at the fork bonfire, opposite path of the fog path.',
    steps: [
      {
        id: 'ch28-s01',
        text: 'Lucatiel\'s ending is here. MAKE SURE NOT TO TALK TO HER UNLESS YOU\'VE COMPLETED HER SIDE QUEST. If she is here, then you\'ve completed the dialogue portion of the side quest. However, in order to inherit her equips, you must have summoned her at least 3 threes with her surviving each encounter. See \'Lucatiel\' section for more details.',
        subAchievementIds: [{ achievementId: 'lucatiel', subItemId: 'final' }],
        warning: 'MAKE SURE NOT TO TALK TO HER UNLESS YOU\'VE COMPLETED HER SIDE QUEST.',
      },
      {
        id: 'ch28-s02',
        text: 'Enter Aldia\'s Keep and the dragon will not automatically hostile. In Scholar of the First Sin, he will activate upon lighting up all four scones throughout the area and defeating each red phantom that spawns as a result. The dragon also holds Aldia\'s Key now as well. Not required.',
      },
      {
        id: 'ch28-s03',
        text: 'Quick note: Do not pull the lever under the staircase.',
        warning: 'Do not pull the lever under the staircase.',
      },
      {
        id: 'ch28-s04',
        text: 'If you go straight and to the right, you will find Royal Sorcerer Navlaan. If you are human, he tells you to go away. If you are hollowed, he will ask you to kill various NPCs in his stead. This is required, see the Clean-up section of the walkthrough. Recommended to do later in the game.',
      },
      {
        id: 'ch28-s05',
        text: 'On the top floor on the right, a chest contains the Great Magic Barrier miracle. Not a unique spawn. Sold by Chancellor Wellager.',
        spellIds: ['great-magic-barrier'],
      },
      {
        id: 'ch28-s06',
        text: 'Proceed to the next area with the gates. On the left you will find a door. Enter and go down. A bonfire is hidden midway down the stairs on the left. Inside the corrosive pit, you will find the Soul Geyser sorcery. After dispatching the dogs inside, unequip your equips and loot. This is a unique spawn.',
        spellIds: ['soul-geyser'],
      },
      {
        id: 'ch28-s07',
        text: 'Continue on the level. There are a few ambushing ogres through walls so be careful. The doors on the right are accessed with Aldia\'s Key.',
      },
      {
        id: 'ch28-s08',
        text: 'There are no summons for the Guardian Dragon. His attacks are simple, dodge his fire and attack when he\'s down.',
      },
    ],
  },
  {
    id: 'ch29-dragon-aerie-dragon-shrine',
    title: 'Dragon Aerie/Dragon Shrine',
    summary: 'Ashen Mist Heart',
    steps: [
      {
        id: 'ch29-s01',
        text: 'Speak with Emerald Herald to receive the Aged Feather.',
      },
      {
        id: 'ch29-s02',
        text: 'Scholar of the First Sin already has the ladder knocked down at its only bonfire and you are free to skip this area by going up the ladder and crossing the slide to the end and enter Dragon Shrine after crossing the bridge',
      },
      {
        id: 'ch29-s03',
        text: 'Once you head up, pass the first Old Knight and at the second Old Knight, take the path to the left and go up stairs. Cross the bridge towards the tower and then drop down on the side. You\'ll know you took the right path if Dragonfang Villard invades you. Head up the spiral staircase and you can loot the Petrified Egg. Return to Magerold of Lanafir in Iron Keep to join the Dragon Remnants covenant.',
        achievementIds: ['covenant-of-ancients'],
      },
      {
        id: 'ch29-s04',
        text: 'Drop down on the ledge and look to your right for the Crystal Magic Weapon sorcery in a chest.',
        spellIds: ['crystal-magic-weapon'],
      },
      {
        id: 'ch29-s05',
        text: 'Proceed to the end of the area and talk to the Ancient Dragon for the Ashen Mist Heart.',
      },
      {
        id: 'ch29-s06',
        text: 'Ancient Dragon - Acquire Ashen Mist Heart',
        achievementIds: ['ancient-dragon'],
        subAchievementIds: [{ achievementId: 'curious-map', subItemId: 'flame-7' }],
      },
    ],
  },
  {
    id: 'ch31-black-gulch-revisited',
    title: 'Black Gulch Revisited',
    summary: 'Now that you have the Ashen Mist Heart, we\'re going to take out Vendrick before reaching the end of the game.',
    steps: [
      {
        id: 'ch31-s01',
        text: 'This area depends if you\'ve already taken out the Elite Giants at the bottom of Black Gulch who holds both Forgotten Key and Soul of a Giant.',
      },
      {
        id: 'ch31-s02',
        text: 'If you have, ignore this portion.',
      },
      {
        id: 'ch31-s03',
        text: 'If you haven\'t make your way from the second bonfire in Black Gulch and drop down. Drop down again into a tunnel and head through to find two Elite Giants. Dispatch of them for the Forgotten Key and the first Soul of a Giant.',
      },
      {
        id: 'ch31-s04',
        text: 'You can go in a loop and open the door with the forgotten key if you\'d like to talk to Darkgiver Grandahl for Pilgrims of Dark covenant.',
      },
    ],
  },
  {
    id: 'ch32-memory-of-orro',
    title: 'Memory of Orro',
    summary: 'Finale',
    steps: [
      {
        id: 'ch32-s01',
        text: 'The first memory we\'re visiting is the area where you should have fought the Pursuer boss with the bird\'s nest.',
      },
      {
        id: 'ch32-s02',
        text: 'Speak to Benhart of Jugo here and exhaust his dialogue.',
        subAchievementIds: [{ achievementId: 'moonlight-greatsword', subItemId: 'dialogue-4' }],
      },
      {
        id: 'ch32-s03',
        text: 'Enter the memory of the giant nearby to enter Memory of Orro.',
      },
      {
        id: 'ch32-s04',
        text: 'Once inside, you\'ll find Benhart of Jugo sitting on the ground before the stairs. This is his final location, you can come by later when you\'ve gained your third summon if you haven\'t already. Exhausting his dialogue enables you to summon him for Memory of Jeigh.',
        subAchievementIds: [{ achievementId: 'moonlight-greatsword', subItemId: 'dialogue-5' }, { achievementId: 'moonlight-greatsword', subItemId: 'final' }],
      },
      {
        id: 'ch32-s05',
        text: 'There are no items related to achievements in here so you can run to the end and pick-up the Soul of a Giant from the Giant\'s Corpse.',
      },
    ],
  },
  {
    id: 'ch33-memory-of-jeigh',
    title: 'Memory of Jeigh',
    summary: 'Finale',
    steps: [
      {
        id: 'ch33-s01',
        text: 'It\'s preferred to do Memory of Jeigh before doing Memory of Vammar so you do not have to revisit Memory of Vammar for Captain Drummond\'s inheritance.',
      },
      {
        id: 'ch33-s02',
        text: 'Head to the Cardinal Tower Bonfire and go down the ladder. Cross the bridge, open the door with the Soldier\'s Key then open the King\'s Gate with the King\'s Ring.',
      },
      {
        id: 'ch33-s03',
        text: 'You can exclusively summon Benhart of Jugo or Captain Drummond provided you exhausted their dialogues in their respective locations inside memories. For achievement purposes, we\'d prefer Benhart.',
        subAchievementIds: [{ achievementId: 'moonlight-greatsword', subItemId: 'summon-3' }],
      },
      {
        id: 'ch33-s04',
        text: 'The entire level is just a bridge, you can run across the bridge and wait until the head starts rolling as it\'ll do immense damage to Benhart as well as the bombardments. Rush across to the end to encounter the Giant Lord. While the Giant Lord is easy, you are on a time limit and Benhart could\'ve sustained immense damage early on so dispatch quickly. He\'ll drop the Soul of a Giant.',
      },
    ],
  },
  {
    id: 'ch34-memory-of-vammar',
    title: 'Memory of Vammar',
    summary: 'Finale',
    steps: [
      {
        id: 'ch34-s01',
        text: 'The giant is where you first encountered Pate but on the otherside of the wall, not inside the trap.',
      },
      {
        id: 'ch34-s02',
        text: 'Once in before you encounter some closed doors, Captain Drummond is on the ground. Exhaust his dialogue and learn the \'Hurrah\' gesture, the final gesture for \'Gesture Maestro\'. If you also followed this guide, then you will also receive \'Holder of the Fort\'.',
        subAchievementIds: [{ achievementId: 'gesture-maestro', subItemId: 'hurrah' }],
      },
      {
        id: 'ch34-s03',
        text: 'Holder of the Fort - Inherit Captain Drummond\'s equipment',
        achievementIds: ['holder-of-the-fort'],
      },
      {
        id: 'ch34-s04',
        text: 'The only requirement is to have defeated the Giant Lord, so if you followed this guide you\'ll get it. If not, revisit Drummond after you\'ve done so.',
      },
      {
        id: 'ch34-s05',
        text: 'Gesture Maestro - Learn all gesture',
        achievementIds: ['gesture-maestro'],
      },
      {
        id: 'ch34-s06',
        text: 'If you missed a gesture, you can visit the Gesture Maestro section to compare which one you missed as well as figure out how you obtain it.',
      },
      {
        id: 'ch34-s07',
        text: 'There is also nothing required here so you can get to the end to examine the Giant\'s corpse to obtain the Soul of a Giant.',
      },
    ],
  },
  {
    id: 'ch35-ancient-dragon',
    title: 'Ancient Dragon',
    summary: 'Finale',
    steps: [
      {
        id: 'ch35-s01',
        text: 'If you revisit the boss room where you fought The Duke\'s Dear Freja, you can enter the petrified dragon\'s memory and obtain the Ancient Dragon\'s Soul which aptly describes the Ancient Dragon in Dragon Shrine.',
      },
      {
        id: 'ch35-s02',
        text: 'If you go to Dragon Shrine and kill the Ancient Dragon, he drops the fifth and final Soul of a Giant. You do not need it, but you can.',
      },
    ],
  },
  {
    id: 'ch36-king-vendrick',
    title: 'King Vendrick',
    summary: 'Finale',
    steps: [
      {
        id: 'ch36-s01',
        text: 'The whole purpose of collecting all those Soul of a Giant was to lower Vendrick\'s defenses. Vendrick\'s default defense is 32x and each Soul of a Giant will decrease it by a multiple of 2. So one Soul of a Giant lowers it to 16x, another to 8x, then 4x, then 2x, then finally to 1x.',
      },
      {
        id: 'ch36-s02',
        text: 'Vendrick is fairly easy, just hug the leg opposite of his wielding hand.',
      },
      {
        id: 'ch36-s03',
        text: 'First moveset is when he swings vertically down. If the second swing comes in succession, he will not swing horizontally afterwards. If there is a pause between the two vertical swings, then he will swing vertically.',
      },
      {
        id: 'ch36-s04',
        text: 'Second moveset is when he starts with a horizontal swing. If he pauses too long, he will not swing again.',
      },
      {
        id: 'ch36-s05',
        text: 'Do not stand too far behind him, try to stand to his side that he\'s always rotating towards you until you bait him to attack. If you do, he\'ll jump backwards.',
      },
      {
        id: 'ch36-s06',
        text: 'Vendrick - Defeat Vendrick',
        achievementIds: ['vendrick'],
      },
    ],
  },
  {
    id: 'ch37-throne-of-want',
    title: 'Throne of Want',
    summary: 'Finale',
    steps: [
      {
        id: 'ch37-s01',
        text: 'Now that Vendrick is gone, we can proceed to the finale. Head to King\'s Gate bonfire in Drangleic Castle. Open the King\'s Gate and head to the end.',
      },
      {
        id: 'ch37-s02',
        text: 'You will be able to summon Benhart here if you need him for his sidequest.',
      },
      {
        id: 'ch37-s03',
        text: 'Depending which attempt this is, you will have 3 boss fights in succession with 4 bosses.',
      },
      {
        id: 'ch37-s04',
        text: 'First fight is against the Throne Defender and Throne Watcher. The only thing I\'ll note here is that you\'ll have to kill them in succession; otherwise, the other will get back up. Should you have Benhart summoned, he will disappear after this.',
        subAchievementIds: [{ achievementId: 'curious-map', subItemId: 'flame-8' }],
      },
      {
        id: 'ch37-s05',
        text: 'Against Nashandra, swing at the curse mist to destroy them, otherwise easy fight.',
      },
      {
        id: 'ch37-s06',
        text: 'Against Aldia, just be careful of where he warps, it\'ll glow red with fire. Attack him when he\'s not engulfed in flames as his defenses are lowered then.',
        subAchievementIds: [{ achievementId: 'curious-map', subItemId: 'flame-8' }],
      },
      {
        id: 'ch37-s07',
        text: 'The Heir - See the Ending',
        achievementIds: ['the-heir'],
      },
      {
        id: 'ch37-s08',
        text: 'It\'ll unlock once you complete the credits.',
      },
    ],
  },
  {
    id: 'ch39-crown-of-the-sunken-king',
    title: 'Crown of the Sunken King',
    summary: 'The sole purpose of attempting the DLC in terms of achievements is to obtain the additional spells now required for Mastery.',
    steps: [
      {
        id: 'ch39-s01',
        text: 'Before you reach the second bonfire where you lift a ton of lifts at range, you will notice some statues with red eyes. Break them then shoot at the lift contraption behind it. You\'ll be able to cross into the cave with a tree that repairs equips for free. A corpse nearby will contain the Promised Walk of Peace hex.',
        spellIds: ['promised-walk-of-peace'],
      },
      {
        id: 'ch39-s02',
        text: 'Before the bridge where the dragon crosses and burns the two enemies, instead of crossing the bridge, go straight on the ledge behind the pots to find the Focus Souls sorcery.',
        spellIds: ['focus-souls'],
      },
      {
        id: 'ch39-s03',
        text: 'Inside Dragon Sanctum, you\'ll drop down to an area with spikes and a wheel contraption. You will need iron arrows as the switch is behind the wheel so you have to reposition yourself three times to hit the switch. Inside the contraption is the Denial miracle.',
        spellIds: ['denial'],
      },
      {
        id: 'ch39-s04',
        text: 'After you\'ve obtained the Eternal Sanctum Key, go back to the beginning of Dragon Sanctum and open the door. Go up the ladder and cross the bridge and head to the final bonfire of Shulva. Activate the elevator and go down. On the way down or up, you can get off midway where there are chests. Inside the chest will be the Dark Greatsword hex. You can go around if you get off on the wrong side.',
        spellIds: ['dark-greatsword'],
      },
    ],
  },
  {
    id: 'ch40-crown-of-the-old-iron-king',
    title: 'Crown of the Old Iron King',
    summary: 'Note: In order to fight Sir Alonne, you will need the Ashen Mist Heart to enter the memory.',
    steps: [
      {
        id: 'ch40-s01',
        text: 'To enter the Old Iron King DLC, you need the Heavy Iron Key. First off you need the Iron Key which is the early loot under the fire-breathing bull statue in the first area of Iron Keep. From there, go to where you fought the Last Giant and you can now open the door. inside head straight ahead to the lizard near the gap. The corpse holds the Heavy Iron Key. DLC entrance is after the Iron Keep primal bonfire.',
      },
      {
        id: 'ch40-s02',
        text: 'After ascending the stairs, you\'ll find 6 smelter wedges on a body. Now this is a warning: I do not know how Dark Souls II handles drops, but they tend to disappear if you don\'t loot an item. If the Souls the Ashen Idol drops are drops instead of corpse loot, then that means dying twice would make it disappear. So clear the area before looting to be safe.',
      },
      {
        id: 'ch40-s03',
        text: 'Cross the chain link and light the first bonfire. You will meet your first Ashen Idol. It\'s recommended that you do not destroy this Ashen Idol just yet.',
      },
      {
        id: 'ch40-s04',
        text: 'Continue in the level and you\'ll enter a corridor with the second Ashen Idol. You may destroy this one. This is your 1st soul.',
      },
      {
        id: 'ch40-s05',
        text: 'After dropping down a few ladders, you\'ll enter a room with an Iron Warrior as well as some Ashen Warriors with an Ashen Idol in the back. Drop down head to your right into a separate room to find the \'Dance of Fire\' pyromancy. You may destroy this Ashen Idol. This is your 2nd soul.',
        spellIds: ['dance-of-fire'],
      },
      {
        id: 'ch40-s06',
        text: 'Proceed in the level where you end up outside again. You will see a tower to the left with a set of stairs leading down after going down a ladder. The stairs leads to an Ashen Idol but leave it for later.',
      },
      {
        id: 'ch40-s07',
        text: 'Prior to getting the scepter, you\'ll climb down a ladder and be in a room with a bunch of doors. Behind one of the doors is the Recollection hex on a corpse. You will be invaded as you go down the ladder.',
        spellIds: ['recollection'],
      },
      {
        id: 'ch40-s08',
        text: 'Head through the doorway to the Foyer bonfire and proceed until you get the Scepter to activate the elevators. Now you can head to the boss and use the 4 remaining Smelter wedges you have on the 4 Ashen Idols surrounding the boss. If you don\'t disable them, they will heal the Fume Knight. This is the 3rd to 6th soul.',
      },
      {
        id: 'ch40-s09',
        text: 'You can summon two NPCs for the Fume Knight. After you defeat him, he will give you the 12th piece of the Soul of Nadalia. This would be your 7th soul.',
      },
      {
        id: 'ch40-s10',
        text: 'First off you\'ll need extra Smelter Wedges. From the Foyer bonfire, head up the lift and take the right. You\'ll be led into a curved hallway with fire breathing bull heads. Run through it and go up stairs. At the end of the hall is a chest with 4 smelter wedges.',
      },
      {
        id: 'ch40-s11',
        text: 'From the Foyer Bonfire, the door near the Scepter placement has an Ashen Idol inside. Go straight in and to your left. Then the room on the right has the Fire Snake pyromancy. This is your 8th soul.',
        spellIds: ['fire-snake'],
      },
      {
        id: 'ch40-s12',
        text: 'From the Foyer Bonfire, you\'ll need to go down the lift and you\'ll find an ash field with three iron warriors. You\'ll find the Tower Key which you\'ll need to fight Sir Alonne.',
      },
      {
        id: 'ch40-s13',
        text: 'From the Foyer Bonfire, go up the lift once, get off and head left and take that lift up. There will be an Ashen Idol immediately in front of you as you get invaded by Prowlers. This is your 9th soul.',
      },
      {
        id: 'ch40-s14',
        text: 'Continuing the path from the previous point, you\'ll find an armor glowing in red (only if you have the crown after the Fume Knight) and a bonfire. Examine the armor to fight Sir Alonne to obtain the 11th and final Smelter Wedge.',
      },
      {
        id: 'ch40-s15',
        text: 'Revisit the first bonfire and destroy the Ashen Idol. This is your 10th soul.',
      },
      {
        id: 'ch40-s16',
        text: 'From the second bonfire, head forward and the missing gap can be crossed with the elevator now. Inside the doorway will be an Iron Warrior and the Ashen idol behind the 3rd door from the left. This is your 11th soul.',
      },
      {
        id: 'ch40-s17',
        text: 'From the Foyer bonfire, head backwards and go down the stairs and across the chain link. There is an Ashen Idol near the bottom of the tower. This is your 12th soul and final soul.',
      },
      {
        id: 'ch40-s18',
        text: 'Upon having the 12th soul, you receive the true soul and can trade with Straid for Outcry for 45,000 souls.',
        spellIds: ['outcry'],
      },
    ],
  },
  {
    id: 'ch41-crown-of-the-ivory-king',
    title: 'Crown of the Ivory King',
    summary: 'In order to enter the Ivory King DLC, you need the Frozen Flower. Should you not have it already by following the guide, it\'s in Drangleic Castle after the King\'s Gate bonfire. It\'s behind the first gate on the right on a corpse. DLC entrance is at Shrine of Winter.',
    steps: [
      {
        id: 'ch41-s01',
        text: 'Mental Note: Once you\'ve entered the first building, go downstairs and there is a doorway to the right. The passage is blocked by a elevator with coffins. Soul Flash is in the chest on the other side.',
        spellIds: ['soul-flash'],
      },
      {
        id: 'ch41-s02',
        text: 'After the bonfire where you drop down, you\'ll head up the stairs and into the next area. You can actually go towards the upper snow area which leads back to the fountain area. Take the snow ledge right and it\'ll lead you back to the area you were just except on top with a corpse loot. This is the Dark Dance hex.',
        spellIds: ['dark-dance'],
      },
      {
        id: 'ch41-s03',
        text: 'Continue in the level until you have to pull a lever to open a gate. One of these gateways has no door and you can go in and pull a lever thus raising the elevator with coffins you saw earlier.',
      },
      {
        id: 'ch41-s04',
        text: 'Once you\'re on the front balcony where you can see the first bonfire, go to the tower that\'s closest to the beginning bridge. If you look up, you can see a doorway. There is an invisible ladder that you can use that leads to the Splintering Lightning Spear miracle. It becomes visible if you have the Eye of the Priestess.',
        spellIds: ['splintering-lightning-spear'],
      },
      {
        id: 'ch41-s05',
        text: 'Return to the first bonfire and run to the first bonfire and get the Soul Flash sorcery and thus completing your DLC journey for spells.',
        spellIds: ['soul-flash'],
      },
    ],
  },
  {
    id: 'ch42-clean-up',
    title: 'Clean-Up',
    summary: 'Clean-Up',
    steps: [
      {
        id: 'ch42-s01',
        text: 'Selfless Giver - Max-out devotion to covenant',
        achievementIds: ['selfless-giver'],
      },
      {
        id: 'ch42-s02',
        text: 'Max-out devotion to covenant.',
      },
      {
        id: 'ch42-s03',
        text: 'You only need to max one covenant for Selfless Giver, but there are two covenants that you must max out to get 100% in Dark Souls which are the Pilgrims of Dark covenant and the Heirs of the Sun. The easiest covenant to complete is Way of the Blue, but it\'s not required overall for 100% achievements.',
      },
    ],
  },
  {
    id: 'ch43-heirs-of-the-sun',
    title: 'Heirs of the Sun',
    summary: 'Clean-Up',
    steps: [
      {
        id: 'ch43-s01',
        text: 'You need 30 sunlight medals in order to max out the Heirs of the Sun as well as pick up the Sunlight Spear miracle. Unique occurence.',
        spellIds: ['sunlight-spear'],
      },
      {
        id: 'ch43-s02',
        text: 'Sunlight medals can be obtained by defeating bosses either as a member of the Heirs of the Sun or by summoning a player who is a member of the Heirs of the Sun.',
      },
      {
        id: 'ch43-s03',
        text: 'Sunlight medals are dropped by Falconer Knights located in Things Betwixt (NG+) as well as the Mounted Overseer in Harvest Valley. (The guys who launch dark magic balls at you).',
      },
    ],
  },
  {
    id: 'ch44-pilgrims-of-the-dark',
    title: 'Pilgrims of the Dark',
    summary: 'Clean-Up',
    steps: [
      {
        id: 'ch44-s01',
        text: 'You have to complete Pilgrims of the Dark in order to obtain the Climax hex as it is a unique occurrence in the game.',
        spellIds: ['climax'],
      },
      {
        id: 'ch44-s02',
        text: 'To max out the covenant, you have to complete all 3 Abyss as well as the Darklurker boss. The first attempt at an abyss is free; every subsequent attempt costs a human effigy.',
      },
      {
        id: 'ch44-s03',
        text: 'To join, you must have spoken to Grandahl at all 3 locations first.',
      },
      {
        id: 'ch44-s04',
        text: 'Location 1: Behind Forgotten Door in Black Gulch',
      },
      {
        id: 'ch44-s05',
        text: 'From the second bonfire, head backwards to the razorbacks and drop down off the cliff onto a ledge. Go in and talk to Darkgiver Grandahl. Join if necessary. Enter the abyss, light the torch, defeat all enemies and drop into the abyss.',
      },
      {
        id: 'ch44-s06',
        text: 'Location 2: In a pit at the end of Shaded Woods',
      },
      {
        id: 'ch44-s07',
        text: 'From the Shaded Ruins bonfire, you can run passed all the ghosts without aggroing them so just run straight up the pit and turn right until you get to the bottom of the hill leading to Najka. Head straight and there is a wooden plank straight ahead. Walking on it breaks and you\'ll fall right next to Darkgiver Grandahl. Complete the Abyss.',
      },
      {
        id: 'ch44-s08',
        text: 'Location 3: Drangleic Castle third bonfire',
      },
      {
        id: 'ch44-s09',
        text: 'From the King\'s Gate bonfire in Drangleic Castle, the far left soul door in the room with statues has a Ruin Sentinel and a fragile flooring where you can drop down to the third bonfire and Darkgiver Grandahl. Complete the Abyss.',
      },
      {
        id: 'ch44-s10',
        text: 'Darklurker will appear right after you complete the third abyss and he is a boss fight. If you fail to defeat him, you have to go through an entire abyss and then fight him again. Personally, I found the Abyss in Shaded Woods to be the easiest for me.',
      },
      {
        id: 'ch44-s11',
        text: 'After you\'ve defeated Darklurker, speak to Darkgiver Grandahl and he\'ll give you Resonant Soul, Great Resonant Soul, and Climax hexes in their respective covenant rank of 1, 2, 3.',
        spellIds: ['great-resonant-soul', 'resonant-soul', 'climax'],
      },
      {
        id: 'ch44-s12',
        text: 'Curious Map - Light all the flames on the map in Majula.',
        achievementIds: ['curious-map'],
      },
      {
        id: 'ch44-s13',
        text: 'You should already have Cale relocated to Majula and at this point in the walkthrough, you\'ve already beat the game and thus speaking to Cale should get his helmet and the achievement.',
      },
      {
        id: 'ch44-s14',
        text: 'Supreme Weapon - Reinforce a weapon to its limits.',
        achievementIds: ['supreme-weapon'],
      },
      {
        id: 'ch44-s15',
        text: 'All you need to do is get a regular type weapon to +10. You can infuse the weapon if you like as it plays no part in influence the amount of materials you need. If a weapon requires twinkling titanite, then you\'ll have to find a different item to use.',
      },
      {
        id: 'ch44-s16',
        text: 'Garrolous Miser - Inherit Laddersmith Gilligan\'s equipment',
        achievementIds: ['garrulous-miser'],
      },
      {
        id: 'ch44-s17',
        text: 'If you haven\'t gotten this, you can head to Majula and speak with Gilligan next to the pit. Purchase his 12,000 soul ladder then exhaust his dialogue to receive the Melu Scimitar and this achievement.',
      },
    ],
  },
  {
    id: 'ch45-shop-spells',
    title: 'Shop Spells',
    summary: 'I essentially pointed out all spell locations you could get for free while you progressed through the stages, but now we need to cover the rest and some that required revisiting. We\'ll go over the purchases first.',
    steps: [
      {
        id: 'ch45-s01',
        text: 'Licia of Lindelt: Heal (1500 souls), Med Heal (3000 souls), Great Heal Excerpt (4500 souls), Replenishment (3000 souls), Resplendent Life (4500 souls), Caressing Prayer (2000 souls), Force (1800 souls), Lightning Spear (6000 souls), Homeward (2400 souls), Guidance (3700 souls)',
        spellIds: ['great-heal-excerpt', 'resplendent-life', 'caressing-prayer', 'lightning-spear', 'replenishment', 'med-heal', 'homeward', 'guidance', 'force', 'heal'],
      },
      {
        id: 'ch45-s02',
        text: 'Carhillion of the Fold: Soul Arrow (1500 souls), Great Soul Arrow (3000 souls), Heavy Soul Arrow (2000 souls), Great Heavy Soul Arrow (4500 souls), Shockwave (1800 souls), Soul Spear Barrage (2600 souls), Magic Weapon (2000 souls), Yearn (3000 souls)',
        spellIds: ['great-heavy-soul-arrow', 'soul-spear-barrage', 'great-soul-arrow', 'heavy-soul-arrow', 'magic-weapon', 'soul-arrow', 'shockwave', 'yearn'],
      },
      {
        id: 'ch45-s03',
        text: 'Rosabeth of Melfia: Fireball (1200 souls), Fire Orb (3400 souls), Combustion (1500 souls), Poison Mist (3400 souls), Flash Sweat (2300 souls), Iron Flesh (3500 souls)',
        spellIds: ['poison-mist', 'flash-sweat', 'combustion', 'iron-flesh', 'fireball', 'fire-orb'],
      },
      {
        id: 'ch45-s04',
        text: 'Blue Sentinel Targray: Emit Force (4200 souls), Heavenly Thunder (3300 souls)',
        spellIds: ['heavenly-thunder', 'emit-force'],
      },
      {
        id: 'ch45-s05',
        text: 'Stone Trader Chloanne: Soul Appease (8800 souls), Dead Again (4000 souls)',
        spellIds: ['soul-appease', 'dead-again'],
      },
      {
        id: 'ch45-s06',
        text: 'Straid of Olaphis: Homing Soul Arrow (6500 souls), Strong Magic Shield (6300 souls), Cast Light (3000 souls), Unveil (2200 souls), Sunlight Blade (after Undead Crypt) (12,400 souls), Great Lightning Spear (after Undead Crypt) (13,000 souls), Dark Orb (600 souls), Dark Hail (1500 souls), Dark Fog (5200 souls), Affinity (11,500 souls)',
        spellIds: ['great-lightning-spear', 'strong-magic-shield', 'homing-soul-arrow', 'sunlight-blade', 'cast-light', 'dark-hail', 'dark-orb', 'dark-fog', 'affinity', 'unveil', 'lingering-flame', 'flame-swathe'],
      },
      {
        id: 'ch45-s07',
        text: 'Titchy Gren: Firestorm (4500 souls), Great Combustion (4800 souls), Fire Whip (3800 souls)',
        spellIds: ['great-combustion', 'firestorm', 'fire-whip'],
      },
      {
        id: 'ch45-s08',
        text: 'Magerold of Lanafir: Fall Control (4800 souls), Dark Hail (1500 souls), Dark Storm (4700 souls)',
        spellIds: ['fall-control', 'dark-hail'],
      },
      {
        id: 'ch45-s09',
        text: 'Cromwell the Pardoner: Scraps of Life (2200 souls), Great Heal (8000 souls), Emit Force (4200 souls), Heavenly Thunder (3300 souls), Perseverance (3500 souls)',
        spellIds: ['heavenly-thunder', 'scraps-of-life', 'perseverance', 'great-heal', 'emit-force'],
      },
      {
        id: 'ch45-s10',
        text: 'Felken the Outcast: Magic Barrier (2700 souls), Dark Orb (600 souls), Dark Weapon (2700 souls), Resonant Soul (1100 souls), Great Resonant Soul (3400 souls), Resonant Flesh (3400 souls), Resonant Weapon (4000 souls)',
        spellIds: ['great-resonant-soul', 'resonant-weapon', 'resonant-flesh', 'magic-barrier', 'resonant-soul', 'dark-weapon', 'dark-orb'],
      },
      {
        id: 'ch45-s11',
        text: 'Weaponsmith Ornifex: Homing Soul Arrow (6500 souls), Homing Soulmass (6000 souls), Fall Control (4800 souls)',
        spellIds: ['homing-soul-arrow', 'homing-soulmass', 'fall-control'],
      },
      {
        id: 'ch45-s12',
        text: 'Chancellor Wellager: Great Magic Barrier (9300 souls), Wrath of the Gods (8200 souls) (NG++), Bountiful Sunlight (11,000 souls) (NG++), Great Chaos Fireball (NG++)',
        spellIds: ['great-chaos-fireball', 'great-magic-barrier', 'bountiful-sunlight', 'wrath-of-the-gods'],
      },
      {
        id: 'ch45-s13',
        text: 'Grave Warden Agdayne: Soul Spear (12,000 souls), Soul Vortex (10,400 souls), Soul Appease (8,800 souls), Warmth (5,200 souls)',
        spellIds: ['soul-appease', 'soul-vortex', 'soul-spear', 'warmth'],
      },
      {
        id: 'ch45-s14',
        text: 'Darkgiver Grandahl: Cast Light (3000 souls), Dark Orb (600 souls), Dark Hail (1500 souls), Darkstorm (4700 souls), Profound Still (13,000 souls)',
        spellIds: ['profound-still', 'cast-light', 'dark-hail', 'darkstorm', 'dark-orb'],
      },
      {
        id: 'ch45-s15',
        text: 'Royal Sorcerer Navlaan: Remember to be hollowed when you talk to him., Great Magic Weapon (6000 souls), Strong Magic Shield (6300 souls)',
        spellIds: ['strong-magic-shield', 'great-magic-weapon'],
      },
    ],
  },
  {
    id: 'ch46-boss-soul-trading',
    title: 'Boss Soul Trading',
    summary: 'List excludes NG+ souls and DLC souls. Those are in their respective sections.',
    steps: [
      {
        id: 'ch46-s01',
        text: 'Toxic Mist: Royal Rat Vanguard Soul (Grave of Saints)',
        spellIds: ['toxic-mist'],
      },
      {
        id: 'ch46-s02',
        text: 'Acid Surge: Royal Rat Authority Soul (Door of Pharros)',
        spellIds: ['acid-surge'],
      },
      {
        id: 'ch46-s03',
        text: 'Sacred Oath: Soul of Velstadt (Undead Crypt)',
        spellIds: ['sacred-oath'],
      },
      {
        id: 'ch46-s04',
        text: 'Soul Shower: Scorpioness Najka Soul (Shaded Woods)',
        spellIds: ['soul-shower'],
      },
      {
        id: 'ch46-s05',
        text: 'Heavy Homing Soul Arrow: Ruin Sentinel Soul (Lost Bastille)',
        spellIds: ['heavy-homing-soul-arrow'],
      },
      {
        id: 'ch46-s06',
        text: 'Lifedrain Patch: Darklurker Soul (Pilgrims of Dark)',
        spellIds: ['lifedrain-patch'],
      },
      {
        id: 'ch46-s07',
        text: 'Repel: Giant Lord Soul (Memory of Jeigh)',
        spellIds: ['repel'],
      },
    ],
  },
  {
    id: 'ch47-other-spells',
    title: 'Other Spells',
    summary: 'Spells',
    steps: [
      {
        id: 'ch47-s01',
        text: 'Head to Aldia\'s Keep as a hollow and speak with Royal Sorcerer Navlaan under the staircase who will ask you to assassinate specific NPCs in his stead proving so by showing specific items. This guide will tell you how to do so without killing anyone.',
      },
      {
        id: 'ch47-s02',
        text: '1. Buy the Ladder Miniature from Gilligan\'s shop; receive Dispelling Ring',
      },
      {
        id: 'ch47-s03',
        text: '2. Complete Curious Map for Cale\'s Helmet; receive Simpleton\'s Spice',
      },
      {
        id: 'ch47-s04',
        text: '3. With 20 faith and intelligence, speak with Felken for Sunset Staff; receive Forbidden Sun pyromancy',
        spellIds: ['forbidden-sun'],
      },
      {
        id: 'ch47-s05',
        text: '4. You already have the Aged Feather; receive Unleash Magic sorcery',
        spellIds: ['unleash-magic'],
      },
      {
        id: 'ch47-s06',
        text: 'Revisit the Pit in Majula, climb down ladder closest to Sweet Shalquoir. Climb up the ladder next to it and open the door with the Forgotten Key. Inside you will find Great Lightning Spear miracle.',
        spellIds: ['great-lightning-spear'],
      },
      {
        id: 'ch47-s07',
        text: 'After buying all the miracles you need from Licia of Lindelt, invade her using the Crushed Eye Orb. Once you defeat her you will receive Soothing Sunlight miracle.',
        spellIds: ['soothing-sunlight'],
      },
      {
        id: 'ch47-s08',
        text: 'As a member of the Bell Keeper, you\'ll have to get to Rank 2 for Hidden Weapon sorcery which consists of defeating 30 red phantoms or hosts. You can do it online, or offline. For offline go to Belfry Sol and go up the ladder. If you go to the tower, at the bottom of the first tower there\'s a chance of a Mad Warrior spawning. Aged Feather or Homeward Bone recommended to reset spawns. Memory trick no longer works so you have to check every time. Talk to the Dwarf to see if you ranked up.',
        spellIds: ['hidden-weapon'],
      },
    ],
  },
  {
    id: 'ch48-ng-and-ng',
    title: 'NG+ and NG++',
    summary: 'Before we begin, I\'ll quickly cover which key items are reset or not reset upon entering NG+ and further.',
    steps: [
      {
        id: 'ch48-s01',
        text: 'Fragrant Branch of Yore will be removed from inventory.',
      },
      {
        id: 'ch48-s02',
        text: 'All keys will be removed from inventory.',
      },
      {
        id: 'ch48-s03',
        text: 'Aged Feather will not be removed from inventory.',
      },
      {
        id: 'ch48-s04',
        text: 'Estus Flask upgrades will not be removed.',
      },
      {
        id: 'ch48-s05',
        text: 'Soapstones will not be removed.',
      },
      {
        id: 'ch48-s06',
        text: 'King\'s Ring will be removed from inventory.',
      },
      {
        id: 'ch48-s07',
        text: 'Ashen Mist Heart will be removed from inventory.',
      },
    ],
  },
  {
    id: 'ch49-ng',
    title: 'NG+',
    summary: 'To enter NG+ and further, you must return to the Far Fire bonfire in Majula. Rest at the bonfire and select to begin a new journey to Drangleic.',
    steps: [
      {
        id: 'ch49-s01',
        text: 'Defeat Last Giant',
      },
      {
        id: 'ch49-s02',
        text: 'Defeat Pursuer at Forest of Fallen Giants',
      },
      {
        id: 'ch49-s03',
        text: 'Defeat Ruin Sentinels accessed through bird\'s nest at Lost Bastille (requires Branch) or skip with Pharros Lockstone/Antiquated Key',
      },
      {
        id: 'ch49-s04',
        text: 'Defeat The Lost Sinner [1/4] (loot Branch of Yore from chest afterwards)',
      },
      {
        id: 'ch49-s05',
        text: 'Defeat Dragonrider at Heide\'s Tower of Flame and move Licia of Lindelt to Majula',
      },
      {
        id: 'ch49-s06',
        text: 'Defeat Skeleton Lords in Huntsman\'s Copse',
      },
      {
        id: 'ch49-s07',
        text: 'Defeat Covetous Demon in Harvest Valley/Earthen Peak',
      },
      {
        id: 'ch49-s08',
        text: 'Defeat Mytha, the Baneful Queen in Earthen Peak and move Laddersmith Gilligan to Majula.',
      },
      {
        id: 'ch49-s09',
        text: 'Buy Gilligan\'s 12,000 soul ladder, climb down and roll down to the Gutter and move to Black Gulch while picking up the Fragrant Branch of Yore at the beginning of Black Gulch.',
      },
      {
        id: 'ch49-s10',
        text: 'Defeat the Rotten. [2/4]',
      },
      {
        id: 'ch49-s11',
        text: 'Free Rosabeth and defeat Scorpionness Najka in Shaded Woods.',
      },
      {
        id: 'ch49-s12',
        text: 'Defeat Prowling Magnus and Congregation in Brightstone Cove Tseldora.',
      },
      {
        id: 'ch49-s13',
        text: 'Defeat The Duke\'s Dear Freja in Brightstone Cove Tseldora. Kill the duke for a Fragrant Branch of Yore. [3/4]',
      },
      {
        id: 'ch49-s14',
        text: 'Defeat Smelter Demon in Iron Keep.',
      },
      {
        id: 'ch49-s15',
        text: 'Defeat Old Iron King in Iron Keep. Loot Fragrant Branch of Yore. [4/4]',
      },
      {
        id: 'ch49-s16',
        text: 'Free Straid in his cell and trade all four Old souls (NG+ of each Great Soul) for their respective spells.',
      },
      {
        id: 'ch49-s17',
        text: 'The Rotten drops the Old Dead One\'s Soul which trades for the Numbness Hex for 10,000 souls. Bonfire Ascetics can be used to obtain earlier at Black Gulch\'s second bonfire. This is the final Hex of the game and you should unlock Master of Hexes. Soul relates to Gravelord Nito.',
        achievementIds: ['master-of-hexes'],
        spellIds: ['numbness'],
      },
      {
        id: 'ch49-s18',
        text: 'The Duke\'s Dear Freja drops the Old Paledrake Soul which trades for Crystal Soul Spear for 10,000 souls. Bonfire Ascetics can be used on the third bonfire in Brightstone Cove Tseldora. This is the final sorcery of the game and you should unlock Master of Sorcery. Soul relates to Seath the Scaleless.',
        achievementIds: ['master-of-sorcery'],
        spellIds: ['crystal-soul-spear'],
      },
      {
        id: 'ch49-s19',
        text: 'The Lost Sinner drops the Old Witch Soul which trades for the Flame Weapon pyromancy for 5,000 souls. Soul relates to the Bed of Chaos, or the Witch of Izalith.',
        spellIds: ['flame-weapon'],
      },
      {
        id: 'ch49-s20',
        text: 'The Old Iron King drops the Old King Soul which trades for the Blinding Bolt miracle for 5,000 souls. While this should align with the final king of Dark Souls, 4 Kings, it could refer to Gwyn.',
        spellIds: ['blinding-bolt'],
      },
      {
        id: 'ch49-s21',
        text: 'Defeat the Twin Dragonriders and Looking Glass Knight at Drangleic Castle.',
      },
      {
        id: 'ch49-s22',
        text: 'Defeat the Demon of Song in Shrine of Amana.',
      },
      {
        id: 'ch49-s23',
        text: 'Defeat Velstadt, the Royal Aegis in Undead Crypt and pick up the King\'s Ring.',
      },
      {
        id: 'ch49-s24',
        text: 'Defeat Guardian Dragon in Aldia\'s Keep.',
      },
      {
        id: 'ch49-s25',
        text: 'Obtain Ashen Mist Heart in Dragon Shrine.',
      },
      {
        id: 'ch49-s26',
        text: 'Defeat Giant Lord in Memory of Jeigh. Other memories not required.',
      },
      {
        id: 'ch49-s27',
        text: 'Defeat Throne Defender, Throne Watcher, and Nashandra',
      },
      {
        id: 'ch49-s28',
        text: 'Aldia only spawns if you kill Vendrick then Nashandra.',
      },
    ],
  },
  {
    id: 'ch50-ng',
    title: 'NG++',
    summary: 'NG+ and NG++',
    steps: [
      {
        id: 'ch50-s01',
        text: 'Defeat Last Giant (buy Fragrant Branch of Yore from Merchant Hag Melentia)',
      },
      {
        id: 'ch50-s02',
        text: 'Defeat Pursuer at Forest of Fallen Giants',
      },
      {
        id: 'ch50-s03',
        text: 'Defeat Ruin Sentinels accessed through bird\'s nest at Lost Bastille (requires Branch) or skip with Pharros Lockstone/Antiquated Key',
      },
      {
        id: 'ch50-s04',
        text: 'Defeat The Lost Sinner [1/4] (loot Branch of Yore from chest afterwards)',
      },
      {
        id: 'ch50-s05',
        text: 'Defeat Dragonrider at Heide\'s Tower of Flame and move Licia of Lindelt to Majula',
      },
      {
        id: 'ch50-s06',
        text: 'Defeat Skeleton Lords in Huntsman\'s Copse',
      },
      {
        id: 'ch50-s07',
        text: 'Defeat Covetous Demon in Harvest Valley/Earthen Peak',
      },
      {
        id: 'ch50-s08',
        text: 'Defeat Mytha, the Baneful Queen in Earthen Peak and move Laddersmith Gilligan to Majula.',
      },
      {
        id: 'ch50-s09',
        text: 'Buy Gilligan\'s 12,000 soul ladder, climb down and roll down to the Gutter and move to Black Gulch while picking up the Fragrant Branch of Yore at the beginning of Black Gulch.',
      },
      {
        id: 'ch50-s10',
        text: 'Defeat the Rotten. [2/4]',
      },
      {
        id: 'ch50-s11',
        text: 'Free Rosabeth and defeat Scorpionness Najka in Shaded Woods.',
      },
      {
        id: 'ch50-s12',
        text: 'Defeat Prowling Magnus and Congregation in Brightstone Cove Tseldora.',
      },
      {
        id: 'ch50-s13',
        text: 'Defeat The Duke\'s Dear Freja in Brightstone Cove Tseldora. Kill the duke for Fragrant Branch of Yore.[3/4]',
      },
      {
        id: 'ch50-s14',
        text: 'Defeat Smelter Demon in Iron Keep.',
      },
      {
        id: 'ch50-s15',
        text: 'Defeat Old Iron King in Iron Keep. Loot Fragrant Branch of Yore. [4/4]',
      },
      {
        id: 'ch50-s16',
        text: 'Go to Drangleic Castle, exhaust Chancellor Wellager\'s dialogue. He now sells Wrath of the Gods, Great Chaos Fireball and Bountiful Sunlight. The final three spells of the game as you should unlock both Master of Miracles and Master of Pyromancy.',
        achievementIds: ['master-of-miracles', 'master-of-pyromancy'],
        spellIds: ['great-chaos-fireball', 'bountiful-sunlight', 'wrath-of-the-gods'],
      },
      {
        id: 'ch50-s17',
        text: 'The Dark Soul - Earn all achievements.',
        achievementIds: ['the-dark-soul'],
      },
      {
        id: 'ch50-s18',
        text: 'Congratulations!',
      },
    ],
  },
]
