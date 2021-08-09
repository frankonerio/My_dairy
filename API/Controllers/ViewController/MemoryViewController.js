import path from 'path'

class MemoryViewController {
  static fetchMemory (request, response) {
    return response.sendFile(path.join(__dirname, '../../Client/memoryView/index.html'));
  }
}

export default MemoryViewController
