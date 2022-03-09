from inventory_report.importer.importer import Importer

import json
import xmltodict


class XmlImporter(Importer):
    def import_data(path):
        if ".xml" in path:
            file = open(path)
            xml_result = xmltodict.parse(file.read())
            return json.loads(json.dumps(xml_result))["dataset"]["record"]

        else:
            raise ValueError("Arquivo inválido")
