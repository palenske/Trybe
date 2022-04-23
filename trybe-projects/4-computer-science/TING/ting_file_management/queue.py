class Queue:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def enqueue(self, value):
        self.data.append(value)

    def dequeue(self):
        to_remove = self.data[0]
        del self.data[0]
        return to_remove

    def search(self, index):
        if index < 0 or index >= len(self):
            raise IndexError()
        else:
            return self.data[index]
