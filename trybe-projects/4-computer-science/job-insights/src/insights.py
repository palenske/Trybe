from .jobs import read


def get_unique_job_types(path):
    return list(set([job["job_type"] for job in read(path)]))


def filter_by_job_type(jobs, job_type):
    return list(filter(lambda item: item["job_type"] == job_type, jobs))


def get_unique_industries(path):
    return list(
        set([job["industry"] for job in read(path) if job["industry"] != ""])
    )


def filter_by_industry(jobs, industry):
    return list(filter(lambda item: item["industry"] == industry, jobs))


def get_max_salary(path):
    return max(
        [
            int(job["max_salary"])
            for job in read(path)
            if job["max_salary"].isnumeric()
        ]
    )


def get_min_salary(path):
    return min(
        [
            int(job["min_salary"])
            for job in read(path)
            if job["min_salary"].isnumeric()
        ]
    )


def matches_salary_range(job, salary):
    if "min_salary" not in job or "max_salary" not in job:
        raise ValueError("keys doesn't exists")
    elif not all(
        isinstance(value, int)
        for value in [job["min_salary"], job["max_salary"], salary]
    ):
        raise ValueError("aren't valid integers")
    elif job["min_salary"] > job["max_salary"]:
        raise ValueError("Min Salary is greather than Max Salary")
    else:
        return job["min_salary"] <= salary <= job["max_salary"]


def filter_by_salary_range(jobs, salary):
    match_jobs = []
    for job in jobs:
        try:
            matches_salary_range(job, salary)
        except ValueError:
            pass
        else:
            if matches_salary_range(job, salary):
                match_jobs.append(job)

    return match_jobs
