import memories from "../Models/memories";

export const getMemory = (id) => {

    const result = memories.find(memory => memory.id === +id);

    return result;
};

export const deleteMemory = (id) => {
  
    const remainingMemories = memories.filter(memory => memory.id !== +id);
    memories.splice(0, memories.length);        // deletes all memories in the array
    memories.push(...remainingMemories);         // pushes remaining memories into the empty array

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

