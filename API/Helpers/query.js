import memories from "../Data/memories";

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

export const updateMemory = (id, title, story, mood, picture) => {
    const result = memories.findIndex(memory => memory.id === +id);
    memories[result] = {
    id: id,
    title: title,
    mood: mood,
    picture: picture,
    story: story,
    date: new Date(),
    id: id,
    title: title ?? memories[result].title,
    mood: mood ?? memories[result].mood ,
    picture: picture ?? memories[result].picture,
    story: story ?? memories[result].story,
    date: new Date() ?? memories[result].date
    };
}
