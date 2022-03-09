from inventory_report.importer.importer import Importer

import json


class JsonImporter(Importer):
    def import_data(path):
        if ".json" in path:
            return json.load(open(path))
        else:
            raise ValueError("Arquivo inválido")
