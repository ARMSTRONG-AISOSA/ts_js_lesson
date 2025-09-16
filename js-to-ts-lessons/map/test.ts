// check @ Notes.txt -> index 2.0

const hunters: { name: string; }[] = [
    { name: 'Natsu' },
    { name: 'Erza' },
    { name: 'Grey' },
    { name: 'Laxus' },
    { name: 'Lucy' },
];

const ranks: number[] = [
    10,
    4,
    11,
    2,
    42,
];


const abilities: { ability: string; finishingMove: string; }[] = [
    {
        ability: 'Dragon Slayer',
        finishingMove: 'Dragon Roar'
    },
    {
        ability: 'Weapon Specialist/Summoner',
        finishingMove: 'Nakagami Starlight'
    },
    {
        ability: 'Devil Slayer',
        finishingMove: 'Ice Devil’s Rage'
    },
    {
        ability: 'Dragon Slayer',
        finishingMove: 'Lightning Dragon’s Heavenward Halberd'
    },
    {
        ability: 'Summoner',
        finishingMove: 'Urano Metria'
    },
];

interface HuntersInfo {
    rank: number | undefined;
    ability: string;
    finishingMove: string;
    id: number;
    name: string;
}

const huntersInfo: HuntersInfo[] = hunters.map((hunter: { name: string; }, index: number) => {

    const rank: number | undefined = ranks[index];
    const ability: string = abilities[index]?.ability ?? "Unknown Ability";
    const finishingMove: string = abilities[index]?.finishingMove ?? "Unknown Finisher";

    return {
        ...hunter,
        rank: rank,
        ability: ability,
        finishingMove: finishingMove,
        id: index + 1,
    }
});

console.log(huntersInfo);