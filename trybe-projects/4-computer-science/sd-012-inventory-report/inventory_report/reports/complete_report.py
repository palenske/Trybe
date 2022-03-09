from .simple_report import SimpleReport


class CompleteReport(SimpleReport):
    @classmethod
    def generate(cls, path):
        company_product_qnty = {}
        text_return = "Produtos estocados por empresa: \n"

        for item in path:
            if item["nome_da_empresa"] in company_product_qnty:
                company_product_qnty[item["nome_da_empresa"]] += 1
            else:
                company_product_qnty[item["nome_da_empresa"]] = 1

        for key, value in company_product_qnty.items():
            text_return += f"- {key}: {value}\n"

        return (
            f"{SimpleReport.generate(path)}\n"
            f"{text_return}"
        )
