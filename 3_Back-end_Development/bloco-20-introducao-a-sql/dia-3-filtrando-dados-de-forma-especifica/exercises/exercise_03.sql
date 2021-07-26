SELECT 
    peca, Preco, Fornecedor
FROM
    PecasFornecedores.Fornecimentos
WHERE
    Fornecedor LIKE '%N%';