import {updateMemory} from '../Helpers/query';

class MemoryUpdateController {

    static updateMemory(request, response) {

        const id = request.body.id
        const title = request.body.title;
        const mood = request.body.mood;
        const story = request.body.story;
        const picture = request.body.picture;
      
        updateMemory(id, title, story, mood, picture);

        return response.status(201).json({
            message:"Memory has been updated"
        }
        )
    }
}

export default MemoryUpdateController;
