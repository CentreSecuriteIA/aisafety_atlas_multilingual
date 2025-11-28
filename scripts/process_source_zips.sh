cd ./parser

#python convert.py ch1  --preprocess --output /Users/me/Temp/translation/preprocessing
#cp -R /Users/me/Temp/translation/preprocessing/preprocessed/01 /Users/me/Temp/translation/preprocessed/

for zipfile in ../source_zips/*.zip; do
    filename=$(basename -- "$zipfile")
    chapter="${filename%.*}"
    # Extract number and pad with zero if needed (assuming ch1 -> 01 format is desired for output folder)
    num=$(echo "$chapter" | sed 's/ch//')
    padded_num=$(printf "%02d" $num)

    python convert.py "$chapter" --preprocess --output /Users/me/Temp/translation/preprocessing
    cp -R "/Users/me/Temp/translation/preprocessing/preprocessed/$padded_num" /Users/me/Temp/translation/preprocessed/
done

cd ..

