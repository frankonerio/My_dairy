import path from 'path'

class MemoryChangeController {
  static fetchCreateMemoryPage (request, response) {
    return response.sendFile(path.join(__dirname, '../../Client/memorychange/index.html'));
  }
}

export default MemoryChangeController
