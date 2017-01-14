declare -a arr=("postcss-merge-rules" "postcss-minify-font-values")

cd node_modules
pwd

for i in "${arr[@]}"
do
   echo "Editing $i..."
   cd $i
   npm init -f
   cd ..
done
