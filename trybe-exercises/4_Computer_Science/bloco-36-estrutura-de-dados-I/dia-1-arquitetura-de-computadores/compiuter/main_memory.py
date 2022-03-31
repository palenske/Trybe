class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        return (
            int(self.loaded_memory[index])
            if self.loaded_memory[index]
            else 0
        )

    def clean(self):
        self.loaded_memory = []
