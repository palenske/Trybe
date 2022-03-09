import pytest
from src.sorting import sort_by


def check_asc_order(list, term):
    prev = list[0][term]
    for value in list:
        if value[term] < prev:
            return False
        prev = value[term]
    return True


def check_dsc_order(list, term):
    prev = list[0][term]
    for value in list:
        if value[term] > prev:
            return False
        prev = value[term]
    return True


def test_sort_by_criteria():
    JOBS = [
        {"max_salary": 10000, "min_salary": 200, "date_posted": "2022-15-02"},
        {"max_salary": 3200, "min_salary": 100, "date_posted": "2022-7-01"},
        {"max_salary": 8000, "min_salary": 150, "date_posted": "2022-14-02"},
        {"max_salary": 4000, "min_salary": 50, "date_posted": "2021-09-22"},
        {"max_salary": 2900, "min_salary": 300, "date_posted": "2000-01-01"},
    ]

    sort_by(JOBS, 'min_salary')
    assert check_asc_order(JOBS, 'min_salary') is True

    sort_by(JOBS, 'max_salary')
    assert check_dsc_order(JOBS, 'max_salary') is True

    sort_by(JOBS, 'date_posted')
    assert check_asc_order(JOBS, 'date_posted') is False

    with pytest.raises(ValueError):
        sort_by(JOBS, 'xablau')
    pass
