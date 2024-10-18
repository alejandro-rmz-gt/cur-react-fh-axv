export const getCharacters = async () => {
    const url = `https://rickandmortyapi.com/api/character`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `Error fetching the characters: ${response.statusText}`
            );
        }

        const { results } = await response.json();

        const characters = results.map((character) => ({
            id: character.id,
            name: character.name,
            image: character.image,
        }));

        console.log(characters);

        return characters;
    } catch (error) {
        console.error('Error fetching characters: ', error);
        return [];
    }
};
