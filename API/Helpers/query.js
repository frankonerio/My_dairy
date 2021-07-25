import memories from "../Models/memories";

export const getMemory = (id) => {

    const result = memories.find(memory => memory.id === +id);

    return result;
};

export const deleteMemory = (id) => {

    memories = memories.filter(memory => memory.id !== +id);
};

export const createMemory = (title, story, mood, picture) => {

    memories.push({
        id: memories.length+1,
        title: title,
        mood: mood,
        picture: picture,
        story: story,
        date: new Date()
    });
}

