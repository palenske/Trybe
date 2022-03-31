def study_schedule(permanence_period, target_time):
    count = 0
    try:
        for period in permanence_period:
            if period[0] <= target_time <= period[1]:
                count += 1
    except Exception:
        return None
    else:
        return count
