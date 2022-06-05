def rain_amount(mm)
    if (mm < 40)
      "You need to give your plant #{40 - mm}mm of water"
    else
      "Your plant has had more than enough water for today!"
    end
end