from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport

import csv
import json
import xmltodict


class Inventory:
    @classmethod
    def import_data(cls, path, way):
        with open(path, "r") as file:
            if ".csv" in path:
                data = list(csv.DictReader(file, delimiter=",", quotechar='"'))
            elif ".json" in path:
                data = json.load(file)
            else:
                xml_result = xmltodict.parse(file.read())
                data = json.loads(json.dumps(xml_result))["dataset"]["record"]

        if way == "simples":
            return SimpleReport.generate(data)
        elif way == "completo":
            return CompleteReport.generate(data)
